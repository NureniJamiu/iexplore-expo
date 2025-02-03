import React, { useState } from "react";
import { Box, Divider, HStack, Text } from "@gluestack-ui/themed";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import { HeaderLogo } from "@/assets/svg/HeaderLogo";
import { appleIcon, googleIcon } from "@/assets/svg/socialIcons";

import FlatButton from "@/components/custom/buttons/FlatButton";
import ProgressBar from "@/components/custom/progress/ProgressBar";
import SocialButton from "@/components/custom/buttons/SocialButton";
import SafePageContainer from "@/components/custom/containers/SafePageContainer";
import { useRouter } from "expo-router";

const image1 = require("@/assets/images/bar1.jpeg");
const image2 = require("@/assets/images/bar2.jpeg");
const image3 = require("@/assets/images/bar3.png");

export default function OnboardingScreen() {
  const router = useRouter();
  const [progressOneStart, setProgressOneStart] = useState(true);
  const [progressTwoStart, setProgressTwoStart] = useState(false);
  const [progressThreeStart, setProgressThreeStart] = useState(false);
  const [progressStep, setProgressStep] = useState(1);

  return (
    <SafePageContainer>
      <Box flex={1} bg="$background">
        <Box alignItems="center" pt={"$2"}>
          <HeaderLogo />
        </Box>

        <HStack
          paddingHorizontal={scale(12)}
          justifyContent="space-between"
          mt={verticalScale(15)}
          mb={verticalScale(8)}
        >
          <ProgressBar
            length={scale(107)}
            start={progressOneStart}
            onComplete={() => {
              setProgressTwoStart(true);
              setProgressStep(2);
            }}
          />
          <ProgressBar
            length={scale(107)}
            start={progressTwoStart}
            onComplete={() => {
              setProgressThreeStart(true);
              setProgressStep(3);
            }}
          />
          <ProgressBar length={scale(107)} start={progressThreeStart} />
        </HStack>
        {progressStep === 1 ? (
          <Box h={verticalScale(330)}>
            <ImageBackground source={image1} style={styles.imgContainer}>
              <Text
                color="$textSecondary"
                position="absolute"
                bottom={0}
                fontSize={moderateScale(26)}
                fontWeight="700"
                lineHeight={36}
                width={"90%"}
                ml={scale(16)}
              >
                Experience the best of your city nightlife
              </Text>
            </ImageBackground>
          </Box>
        ) : progressStep === 2 ? (
          <Box h={verticalScale(330)}>
            <ImageBackground source={image2} style={styles.imgContainer}>
              <Text
                color="$textSecondary"
                position="absolute"
                bottom={0}
                fontSize={moderateScale(26)}
                fontWeight="700"
                lineHeight={36}
                width={"90%"}
                ml={scale(16)}
              >
                Claim drinks reserved for you with ease
              </Text>
            </ImageBackground>
          </Box>
        ) : (
          <Box h={verticalScale(330)}>
            <ImageBackground source={image3} style={styles.imgContainer}>
              <Text
                color="$textSecondary"
                position="absolute"
                bottom={0}
                fontSize={moderateScale(26)}
                fontWeight="700"
                lineHeight={36}
                width={"90%"}
                ml={scale(16)}
              >
                Share memories with your friends on iexplore
              </Text>
            </ImageBackground>
          </Box>
        )}
        <Box>
          <SocialButton
            title="Continue with Google"
            icon={googleIcon}
            onPress={() => console.log("yoooo")}
          />
          <SocialButton
            title="Continue with Apple"
            icon={appleIcon}
            onPress={() => console.log("yoooo")}
          />
        </Box>
        <HStack alignItems="center" justifyContent="space-around">
          <Divider w={scale(140)} />
          <Text color="$textSecondary">or</Text>
          <Divider w={scale(140)} />
        </HStack>
        <Box paddingHorizontal={scale(24)}>
          <FlatButton
            title="I'm new to iExplore"
            onPress={() => router.replace("/(auth)/signup")}
          />
        </Box>
        <HStack justifyContent="center" mt={"$2.5"}>
          <Text color="$textPrimary">Using a different account?</Text>
          <TouchableOpacity onPress={() => router.replace("/(auth)/login")}>
            <Text
              ml={scale(8)}
              textDecorationLine="underline"
              fontWeight="600"
              color="$textSecondary"
            >
              Login
            </Text>
          </TouchableOpacity>
        </HStack>
      </Box>
    </SafePageContainer>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    height: "100%",
  },
});
