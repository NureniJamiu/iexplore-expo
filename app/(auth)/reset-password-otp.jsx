import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { useToast } from "@/components/ui/use-toast";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { url } from "@/lib/api/url";
import { apiPost } from "@/lib/api/api-service";
import AuthHeader from "@/components/custom/headers/AuthHeader";
import OTPCountdownTimer from "@/components/custom/timer/OTPCountdownTimer";
import SafePageContainer from "@/components/custom/containers/SafePageContainer";

export default function ResetPasswordOtpScreen({ route }) {
  const navigation = useNavigation();
  const [code, setCode] = useState("");
  const { email } = route.params;
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (code.length == 6) {
      handleOtp(code);
    }
  }, [code]);

  const handleOtp = async (otp) => {
    console.log("Received OTP:", otp);

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
      const response = await apiPost(url.verifyOtp, {
        otp: code,
      });

      toast.show({
        type: "success",
        text1: "Congratulations",
        text2: code,
      });
      navigation.navigate(SCREENS.auth.resetPassword);
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
      <Box className="flex-1 bg-background">
        <AuthHeader />
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={30}
          style={styles.container} // Added container style
        >
          <Box className="px-4 my-6">
            <Text className="text-primary text-3xl leading-3xl tracking-xl">
              Enter the code sent to{" "}
              <Text className="text-secondary text-3xl leading-3xl tracking-xl">
                {email}
              </Text>
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
