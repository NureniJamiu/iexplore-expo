import {
  Box,
  HStack,
  KeyboardAvoidingView,
  Text,
  useToast,
} from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
// import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import SafePageContainer from "@/components/custom/containers/SafePageContainer";
import GlobalHeader from "@/components/custom/headers/GlobalHeader";
import OTPCountdownTimer from "@/components/custom/timer/OTPCountdownTimer";
import { fetchToken, verifyEmailOtp } from "@/redux/auth/authActions";

export default function OtpConfirmationScreen({ route }) {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [code, setCode] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    user: { email },
    loading,
    error,
  } = useSelector((state) => state.auth);

  // const auth = useSelector(state => state.auth);

  const { values } = route.params;

  // console.log("USER FROM REDUX: ", auth)

  const credentials = { email, password: values.password };

  useEffect(() => {
    if (code.length == 6) {
      handleOtp(code);
    }
  }, [code]);

  const handleOtp = async () => {
    if (code.length !== 6) {
      toast.show({
        type: "error",
        text1: "Error",
        text2: "Please enter a 6-digit OTP.",
      });
      return;
    }
    setIsLoading(true);

    try {
      await dispatch(verifyEmailOtp(code));
      await dispatch(fetchToken(credentials));

      // console.log('TOKEN RESPONSE:', access);
      // const token = await AsyncStorage.setItem("auth-token", response.authToken)

      toast.show({
        type: "success",
        text1: "Congratulations",
        text2: code,
      });
      navigation.navigate(SCREENS.auth.congrats);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.show({
        type: "error",
        text1: "Error",
        text2: "Failed to verify OTP. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafePageContainer>
      <Box flex={1} bg="$background" pt="$2">
        <GlobalHeader />
        <Box marginVertical={"$5"}>
          <Text
            color="$textSecondary"
            fontSize={moderateScale(24)}
            textAlign="center"
            fontWeight="$semibold"
            lineHeight={"$2xl"}
          >
            Confirm OTP
          </Text>
        </Box>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={30}
          style={styles.container}
        >
          <Box px="$4" my="$6" justifyContent="center" alignItems="center">
            <Text color="$textPrimary" textAlign="center" w="85%">
              To confirm your email address, please enter the OTP we sent to{" "}
              <Text color="$textSecondary">{email}</Text>
            </Text>
          </Box>
          <Box my={3} px={8}>
            {/* <SmoothPinCodeInput
              codeLength={6}
              cellStyle={styles.cellStyle}
              cellStyleFocused={styles.cellStyleFocused}
              textStyle={styles.textStyle}
              textStyleFocused={styles.textStyleFocused}
              value={code}
              onTextChange={(code) => setCode(code)}
              containerStyle={styles.containerStyle}
            /> */}
          </Box>
          <HStack alignItems="center" justifyContent="center" my={48}>
            <OTPCountdownTimer email={email} />
          </HStack>
        </KeyboardAvoidingView>
      </Box>
    </SafePageContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cellStyle: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#3C3C3C",
    height: 60,
    width: 50,
  },
  cellStyleFocused: {
    backgroundColor: "#FFFFFF",
  },
  textStyle: {
    fontSize: 32,
    color: "#FFC000",
    fontWeight: "600",
  },
  textStyleFocused: {
    color: "crimson",
  },
  containerStyle: {
    alignSelf: "center",
  },
});
