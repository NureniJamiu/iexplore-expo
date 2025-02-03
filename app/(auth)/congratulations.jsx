import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { CongratsIcon } from "@/assets/svg/CongratsIcon";
import FlatButton from "@/components/custom/buttons/FlatButton";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/utils/screenUtils";
import GlobalHeader from "@/components/custom/headers/GlobalHeader";

const confetti = require("@/assets/images/confetti-gold.png");

export default function CongratulationsScreen() {
  const navigation = useNavigation();
  return (
    <Box className="flex-1 relative items-center justify-center bg-background">
      <ImageBackground source={confetti} style={styles.imageBackground} />
      <Box className="flex-1 w-full">
        <Box
          className="py-3 bg-background opacity-90 justify-end"
          style={{ height: moderateVerticalScale(150) }}
        >
          <GlobalHeader showBackButton={false} />
          <Text
            className="my-5 font-bold text-secondary text-center"
            style={{
              fontSize: moderateScale(24),
              lineHeight: moderateScale(32),
            }}
          >
            Welcome
          </Text>
        </Box>

        <Box className="items-center justify-center my-16">
          <Box className="w-72 py-5 px-9 opacity-80 bg-background items-center justify-center border border-gray-700 rounded-xl">
            <CongratsIcon />
            <Box className="my-5 items-center">
              <Text className="text-center text-primary text-md">
                Hooray! You're now an
              </Text>
              <Text className="text-primary">explorer.</Text>
            </Box>
          </Box>
        </Box>

        <Box className="px-10">
          <FlatButton
            title="Let's go"
            onPress={() =>
              navigation.navigate(SCREENS.navigators.home, {
                screen: SCREENS.home.favoriteCategory,
              })
            }
          />
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});
