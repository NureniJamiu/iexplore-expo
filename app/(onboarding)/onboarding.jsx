import React, { useState } from "react";
import { TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

import { HeaderLogo } from "@/assets/svg/HeaderLogo";
import { appleIcon, googleIcon } from "@/assets/svg/socialIcons";

import FlatButton from "@/components/custom/buttons/FlatButton";
import ProgressBar from "@/components/custom/progress/ProgressBar";
import SocialButton from "@/components/custom/buttons/SocialButton";
import SafePageContainer from "@/components/custom/containers/SafePageContainer";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";
import { useRouter } from "expo-router";
import { Box } from "@/components/ui/box";
import { Image } from "@/components/ui/image";

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
      <Box className="flex-1 bg-background">
        <Box className="flex items-center pt-2">
          <HeaderLogo />
        </Box>

        <Box className="flex flex-row justify-between px-3 mt-3 mb-2">
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
        </Box>

        {progressStep === 1 ? (
          <Box className="h-[330px]">
            <ImageBackground source={image1} style={styles.imgContainer}>
              <Text className="absolute bottom-0 text-secondary text-[26px] font-bold leading-[36px] w-[90%] ml-4">
                Experience the best of your city nightlife
              </Text>
            </ImageBackground>
          </Box>
        ) : progressStep === 2 ? (
          <Box className="h-[330px]">
            <Image source={image2} className="h-full">
              <Text className="absolute bottom-0 text-secondary text-[26px] font-bold leading-[36px] w-[90%] ml-4">
                Claim drinks reserved for you with ease
              </Text>
            </Image>
          </Box>
        ) : (
          <Box className="h-[330px]">
            <Image source={image3} className="h-full">
              <Text className="absolute bottom-0 text-secondary text-[26px] font-bold leading-[36px] w-[90%] ml-4">
                Share memories with your friends on iexplore
              </Text>
            </Image>
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

        <Box className="flex flex-row items-center justify-around">
          <Divider className="w-[140px]" />
          <Text className="text-secondary">or</Text>
          <Divider className="w-[140px]" />
        </Box>

        <Box className="px-6">
          <FlatButton
            title="I'm new to iExplore"
            onPress={() => router.replace("/(auth)/signup")}
          />
        </Box>

        <Box className="flex flex-row justify-center mt-2.5">
          <Text className="text-primary">Using a different account?</Text>
          <TouchableOpacity onPress={() => router.replace("/(auth)/login")}>
            <Text className="ml-2 underline font-semibold text-secondary">
              Login
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </SafePageContainer>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    height: "100%",
  },
});
