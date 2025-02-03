import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Box, StatusBar, Text } from "@gluestack-ui/themed";
import { scale, verticalScale } from "react-native-size-matters";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LogoIcon } from "@/assets/svg/LogoIcon";

const image = require("@/assets/images/rect.png");

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    async function completeOnboarding() {
      await AsyncStorage.setItem("onboardingComplete", "true");
      router.replace("/(onboarding)/onboarding");
      // router.replace("/(tabs)");
    }

    const timer = setTimeout(() => {
      completeOnboarding();
    }, 3000); // Simulating a splash delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground source={image} style={styles.image}>
        <Box justifyContent="flex-start" width="$full">
          <LogoIcon />
          <Box mt="$6">
            <Text
              fontSize={"$5xl"}
              lineHeight={"$5xl"}
              fontWeight="$bold"
              color="$textSecondary"
            >
              Welcome to iexplore
            </Text>
            <Text color="$textPrimary" width={"80%"} mt={verticalScale(10)}>
              Connecting you to the best of nightlife made for you.
            </Text>
          </Box>
        </Box>
        <Box position="absolute" bottom={verticalScale(64)}>
          <ActivityIndicator size={"large"} color={"#F7D098"} />
        </Box>
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
