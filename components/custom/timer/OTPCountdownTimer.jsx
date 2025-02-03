import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import React, { useEffect, useState } from "react";
import { apiPost } from "@/lib/api/api-service";
import { url } from "@/lib/api/url";

const OTPCountdownTimer = ({ email }) => {
  const [timeLeft, setTimeLeft] = useState(5 * 60);
  const [otpExpired, setOtpExpired] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setOtpExpired(true);
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleResendOTP = () => {
    setTimeLeft(5 * 60);
    setOtpExpired(false);
    // Logic to resend OTP here
    apiPost(url.requestOtp, { email: email })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Box>
      {!otpExpired ? (
        <Text className="text-textPrimary">
          Resend code:{" "}
          <Text className="text-textSecondary font-[600]">
            {formatTime(timeLeft)}
          </Text>
        </Text>
      ) : (
        <HStack className="gap-1 items-center">
          <Text className="text-textPrimary">OTP has expired!</Text>
          <Pressable variant="ghost" onPress={handleResendOTP}>
            <Text className="text-textSecondary">Resend OTP</Text>
          </Pressable>
        </HStack>
      )}
    </Box>
  );
};

export default OTPCountdownTimer;
