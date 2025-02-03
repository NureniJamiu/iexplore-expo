import { Box, Text } from "@gluestack-ui/themed";
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
    <Box
      flex={1}
      bg="$background"
      position="relative"
      alignItems="center"
      justifyContent="center"
    >
      <ImageBackground source={confetti} style={styles.imageBackground} />
      <Box flex={1} w="100%">
        <Box
          py="$3"
          bg="$background"
          opacity="$90"
          justifyContent="flex-end"
          h={moderateVerticalScale(150)}
          w="$100%"
        >
          <GlobalHeader showBackButton={false} />
          <Text
            my={"$5"}
            fontWeight="$bold"
            color="$textSecondary"
            fontSize={moderateScale(24)}
            lineHeight={"$2xl"}
            textAlign="center"
          >
            Welcome
          </Text>
        </Box>

        <Box alignItems="center" justifyContent="center" my="$16">
          <Box
            w={"$72"}
            py={"$5"}
            px={"$9"}
            opacity="$80"
            bg="$background"
            alignItems="center"
            justifyContent="center"
            borderWidth={1}
            borderColor="#4D4D4D"
            borderRadius={"$xl"}
          >
            <CongratsIcon />
            <Box my={"$5"} alignItems="center">
              <Text textAlign="center" color="$textPrimary" fontSize={"$md"}>
                Hooray! You're now an
              </Text>
              <Text color="$textPrimary">explorer.</Text>
            </Box>
          </Box>
        </Box>

        <Box px="$10">
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
