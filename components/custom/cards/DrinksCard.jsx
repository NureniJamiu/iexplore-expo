import { Text } from "@/components/ui/text";
import { FavouriteIcon, Icon } from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

const DrinksCard = ({ mr, discount = false }) => {
  const navigation = useNavigation();

  return (
    <Box
      className={` borderRadius-${moderateScale(12)} mr-${mr || 0} w-${scale(154)} minHeight-${verticalScale(200)} bg-secondary border-1 border-borderColor relative `}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: "https://www.themanual.com/wp-content/uploads/sites/9/2020/01/wine-bottle-standard.jpg?p=1",
        }}
        borderTopLeftRadius={moderateScale(12)}
        borderTopRightRadius={moderateScale(12)}
      ></ImageBackground>
      {/* discount and price tags */}
      <Box
        className="absolute top-2 left-0 flex-row w-full px-2 items-center justify-between">
        <Box className="bg-textPrimary rounded-xl px-2.5">
          <Text className="text-background text-xs">
            Spirit
          </Text>
        </Box>
        <Box className="bg-background px-2 rounded-xl border-1 border-textPrimary">
          <Text className="text-textPrimary text-xs">
            Free
          </Text>
        </Box>
      </Box>
      {/* end discount and price tags */}
      <Box className="px-2 py-1.5 pb-4">
        <Box className="flex-row items-start gap-1 justify-between">
          <Text
            className={` lineHeight-${moderateScale(14)} fontSize-${moderateScale(12)} font-[500] text-textPrimary flex-2 `}>
            Johnnie Walker Black Label Air-Ink Limited Edition
          </Text>
          <Icon as={FavouriteIcon} className="text-primary flex-1" />
        </Box>
        <Box className="my-1 flex-row gap-1.5 items-center">
          <Text
            className={` ${discount ? moderateScale(20) : moderateScale(18)} font-bold text-primary `}>
            {discount ? "N232,000" : "NGN 232, 000.00"}
          </Text>
          {discount && (
            <Text
              className={` fontSize-${moderateScale(10)} text-textPrimary line-through `}>
              N232,000
            </Text>
          )}
        </Box>
        <Button
          variant="solid"
          action="primary"
          onPress={() => navigation.navigate(SCREENS.drinks.singleDrink)}
          className={` h-${verticalScale(28)} w-[80%] self-center bg-primary rounded-md mt-1  active:bg-orange-200 `}>
          <ButtonText className={` fontSize-${moderateScale(11)} text-textTertiary `}>
            Claim drink
          </ButtonText>
        </Button>
      </Box>
    </Box>
  );
};

export default DrinksCard;

const styles = StyleSheet.create({
  image: {
    height: verticalScale(100),
    width: "100%",
  },
});
