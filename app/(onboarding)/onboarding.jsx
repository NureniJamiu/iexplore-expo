import React, { useState } from "react";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import { HeaderLogo } from "@/assets/svg/HeaderLogo";
import { appleIcon, googleIcon } from "@/assets/svg/socialIcons";

import FlatButton from "@/components/custom/buttons/FlatButton";
import ProgressBar from "@/components/custom/progress/ProgressBar";
import SocialButton from "@/components/custom/buttons/SocialButton";
import SafePageContainer from "@/components/custom/containers/SafePageContainer";
import Divider from "@/components/ui/Divider";
import Text from "@/components/ui/Text";
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
      <div className="flex-1 bg-background">
        <div className="flex items-center pt-2">
          <HeaderLogo />
        </div>

        <div className="flex flex-row justify-between px-[12px] mt-[15px] mb-[8px]">
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
        </div>
        {progressStep === 1 ? (
          <div className="h-[330px]">
            <ImageBackground source={image1} style={styles.imgContainer}>
              <Text className="absolute bottom-0 text-secondary text-[26px] font-bold leading-[36px] w-[90%] ml-[16px]">
                Experience the best of your city nightlife
              </Text>
            </ImageBackground>
          </div>
        ) : progressStep === 2 ? (
          <div className="h-[330px]">
            <ImageBackground source={image2} style={styles.imgContainer}>
              <Text className="absolute bottom-0 text-secondary text-[26px] font-bold leading-[36px] w-[90%] ml-[16px]">
                Claim drinks reserved for you with ease
              </Text>
            </ImageBackground>
          </div>
        ) : (
          <div className="h-[330px]">
            <ImageBackground source={image3} style={styles.imgContainer}>
              <Text className="absolute bottom-0 text-secondary text-[26px] font-bold leading-[36px] w-[90%] ml-[16px]">
                Share memories with your friends on iexplore
              </Text>
            </ImageBackground>
          </div>
        )}
        <div>
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
        </div>
        <div className="flex flex-row items-center justify-around">
          <Divider className="w-[140px]" />
          <Text className="text-secondary">or</Text>
          <Divider className="w-[140px]" />
        </div>
        <div className="px-[24px]">
          <FlatButton
            title="I'm new to iExplore"
            onPress={() => router.replace("/(auth)/signup")}
          />
        </div>
        <div className="flex flex-row justify-center mt-2.5">
          <Text className="text-primary">Using a different account?</Text>
          <TouchableOpacity onPress={() => router.replace("/(auth)/login")}>
            <Text className="ml-[8px] underline font-semibold text-secondary">
              Login
            </Text>
          </TouchableOpacity>
        </div>
      </div>
    </SafePageContainer>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    height: "100%",
  },
});
