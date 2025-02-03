import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { BookmarkIcon } from "@/assets/svg/BookmarkIcon";

const VenueCard = ({
  name = "Club 52",
  image,
  location = "Awolowo Rd",
  time = "7pm - 4am",
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(SCREENS.home.card)}>
      <Box
        className={` borderRadius-${moderateScale(16)} w-${scale(215)} bg-secondary m-1 p-2 `}>
        <Image
          source={image || require("@/assets/images/club1.jpeg")}
          borderTopRightRadius={moderateScale(8)}
          borderTopLeftRadius={moderateScale(8)}
          style={styles.image}
        />
        <HStack className="mt-4 items-center justify-between">
          <Text className={` fontSize-${moderateScale(16)} font-[700] text-textPrimary `}>
            {name}
          </Text>

          <Icon as={BookmarkIcon} />
        </HStack>
        <Box className={` borderRadius-${moderateScale(16)} my-2 w-[80%] bg-primary `}>
          <Text
            className={` px-${moderateScale(16)} py-${moderateScale(4)} text-xs font-[700] text-textDark-900 `}>
            {location} {"  "}
            <Text className="text-xs font-[400] text-textDark-900">
              {time}
            </Text>
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default VenueCard;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: verticalScale(120),
  },
});
