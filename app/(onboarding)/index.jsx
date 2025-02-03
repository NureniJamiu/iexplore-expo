import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { Text } from "@/components/ui/text";
import { LogoIcon } from "@/assets/svg/LogoIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { scale, verticalScale } from "react-native-size-matters";

const image = require("@/assets/images/rect.png");

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    async function completeOnboarding() {
      await AsyncStorage.setItem("onboardingComplete", "true");
      router.replace("/(onboarding)/onboarding");
    }

    const timer = setTimeout(() => {
      completeOnboarding();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground source={image} style={styles.image}>
        <View className="w-full justify-start">
          <LogoIcon />
          <View className="mt-6">
            <Text className="text-5xl font-bold text-secondary">
              Welcome to iexplore
            </Text>
            <Text className="mt-2 w-4/5 text-primary">
              Connecting you to the best of nightlife made for you.
            </Text>
          </View>
        </View>
        <View className="absolute bottom-16">
          <ActivityIndicator size="large" color="#F7D098" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scale(16),
  },
});
