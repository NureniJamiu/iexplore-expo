import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Box } from "@/components/ui/box";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from "react-native-size-matters";
import { LogoIconSmall } from "@/assets/svg/LogoIconSmall";
import OutlinedText from "@/components/custom/texts/OutlinedText";

const LOGO = require("@/assets/svg/iexplore_small_logo.svg");
const VENUE = require("@/assets/images/club2.jpeg");

const TopSpotCard = ({ number, image, width = scale(155) }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(SCREENS.home.spotOfTheWeek)}
    >
      <Box>
        <Box
          borderTopRightRadius={moderateScale(8)}
          borderBottomRightRadius={moderateScale(8)}
          className={` height-${moderateVerticalScale(200)} w-${width} relative overflow-hidden `}>
          <Box className="justify-between">
            <Box>
              <LogoIconSmall />
            </Box>

            <Box>
              <OutlinedText fontSize={180}>{number}</OutlinedText>
            </Box>
          </Box>
          <Box className="absolute top-0 -right-78 h-full w-full z-2">
            <Image source={image || VENUE} style={styles.image} alt="" />
            <Box
              className={` py-${moderateScale(4)} px-${moderateScale(20)} borderRadius-${moderateScale(4)} bg-primary absolute right-82 bottom-14 `}>
              <Text className="text-textDark-900 font-[700] text-xs">
                Top spot
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className="my-2 bg-background">
          <Text className="text-center text-textPrimary font-[700]">
            Lagoon Restaurant
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default TopSpotCard;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});
