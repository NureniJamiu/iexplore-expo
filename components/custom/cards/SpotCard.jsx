import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Icon } from "@/components/ui/icon";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import FlatButton from "@/components/custom/buttons/FlatButton";

import { Clock1, Star } from "lucide-react-native";
import { DrinksIcon } from "@/assets/svg/DrinksIcon";

const SpotCard = ({ title, imageUrl, imageDescription }) => {
  const navigation = useNavigation();

  return (
    <Box
      className={` pb-${moderateScale(8)} pt-${moderateScale(16)} px-${moderateScale(16)} bg-inputBackground w-full rounded-xl `}>
      <Box className="gap-4 flex-row items-center">
        <Box>
          <Image
            source={require("@/assets/images/club2.jpeg")}
            alt="Spot image"
            style={styles.image}
          />
        </Box>
        <Box className="flex-1">
          <VStack>
            <HStack className="w-full justify-between items-start">
              <Text
                className={` fontSize-${moderateScale(18)} text-textPrimary font-700 w-[70%] `}>
                Maxx BBQs & Bistro
              </Text>
              <HStack className="flex-row gap-0.5 items-center">
                <Star color="#FFC000" size="16" />
                <Text className="text-primary text-xs">
                  4.5
                </Text>
              </HStack>
            </HStack>
            <Text className="text-tertiary text-xs font-[300]">
              Tejuosho Mall, Yaba
            </Text>
            <HStack className={` mt-${scale(20)} gap-2 items-center `}>
              <HStack className="gap-1 items-center">
                <DrinksIcon size={14} color="#FFC000" />
                <Text className="text-textSecondary text-xs font-[300]">
                  Bars & Pubs
                </Text>
              </HStack>
              <HStack className="gap-1 items-center">
                <Icon as={Clock1} size={14} className="text-primary" />
                <Text className="text-textSecondary text-xs font-[300]">
                  4pm - 1am
                </Text>
              </HStack>
            </HStack>
          </VStack>
        </Box>
      </Box>
      <Box className="mt-2">
        <FlatButton height={verticalScale(32)} title="Spot details" />
      </Box>
    </Box>
  );
};

export default SpotCard;

const styles = StyleSheet.create({
  image: {
    width: scale(114),
    height: moderateVerticalScale(114),
    borderRadius: moderateScale(8),
  },
});
