import { Text } from "@/components/ui/text";
import { ChevronRightIcon } from "@/components/ui/icon";
import { Box } from "@/components/ui/box";
import React from "react";
import FlatButton from "@/components/custom/buttons/FlatButton";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

const SectionHeader = ({ title = "Clubs", titleColor }) => {
  const navigation = useNavigation();
  return (
    <Box className="flex-row justify-between items-center my-3">
      <Text
        className={` color-${titleColor || "$textPrimary"} text-xl leading-2xl font-[800] `}>
        {title}
      </Text>
      <FlatButton
        width={scale(69)}
        height={verticalScale(26)}
        fontSize={moderateScale(10)}
        onPress={() => navigation.navigate(SCREENS.home.allCards)}
        title="See all"
        iconRight={ChevronRightIcon}
      />
    </Box>
  );
};

export default SectionHeader;
