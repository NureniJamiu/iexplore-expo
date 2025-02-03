import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { KeyboardAvoidingView } from "@/components/ui/keyboard-avoiding-view";
import { Text } from "@/components/ui/text";
import { useToast } from "@/components/ui/toast";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
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

  const { values } = route.params;

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
      <Box className="flex-1 bg-background pt-2">
        <GlobalHeader />
        <Box className="my-5">
          <Text className="text-textSecondary text-center text-xl font-semibold leading-8">
            Confirm OTP
          </Text>
        </Box>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={30}
          className="flex-1"
        >
          <Box className="px-4 my-6 justify-center items-center">
            <Text className="text-textPrimary text-center w-11/12">
              To confirm your email address, please enter the OTP we sent to{" "}
              <Text className="text-textSecondary">{email}</Text>
            </Text>
          </Box>
          <Box className="my-3 px-8">
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
          <HStack className="items-center justify-center my-12">
            <OTPCountdownTimer email={email} />
          </HStack>
        </KeyboardAvoidingView>
      </Box>
    </SafePageContainer>
  );
}
