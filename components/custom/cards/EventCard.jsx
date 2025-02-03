import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const EventCard = ({
  title = "Omah Lay live at Hotbox",
  location = "Hotbox, Oniru",
  date = "",
  image,
}) => {
  return (
    <ImageBackground
      style={styles.background}
      source={
        image || {
          uri: "https://imgcp.aacdn.jp/img-a/1720/auto/global-aaj-front/article/2017/05/59240064682c4_5924001331ee1_801124285.jpg",
        }
      }
    >
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.08)", "rgba(0, 0, 0, 0.80)"]}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <Box className="flex-row justify-end">
        <Box
          className={` h-${verticalScale(25)} w-${scale(59)} borderRadius-${moderateScale(24)} py-${moderateScale(4)} px-${moderateScale(12)} bg-primary gap-1 flex-row items-center justify-center `}>
          <Text
            className={` fontSize-${moderateScale(14)} text-textTertiary font-[700] `}>
            Hot
          </Text>
          <Text className={` fontSize-${moderateScale(14)} font-[700] `}>
            🔥
          </Text>
        </Box>
      </Box>
      <Box className="mt-40">
        <Text className={` fontSize-${moderateScale(20)} font-[700] text-textPrimary `}>
          {title}
        </Text>
        <Text className={` fontSize-${moderateScale(16)} font-[700] text-[#B0B0B0] `}>
          {location}. {date || "12th Dec 2023"}.
        </Text>
      </Box>
    </ImageBackground>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  background: {
    height: verticalScale(210),
    width: scale(284),
    marginHorizontal: scale(8),
    borderRadius: moderateScale(8),
    overflow: "hidden",
    padding: moderateScale(16),
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
});
