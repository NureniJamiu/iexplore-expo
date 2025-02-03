import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { ScrollView } from "@/components/ui/scroll-view";
import { Image } from "@/components/ui/image";
import { HStack } from "@/components/ui/hstack";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const ClubReviews = ({ name = "Victor Adewale", date, review, image }) => {
  return (
    <Box className="my-[8px] px-4">
      <HStack space="xl" className="items-center my-2">
        <Avatar size="md">
          <AvatarImage
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF22pWQobEP7jY3xgI1GTL1LtZst_rKJWayw&usqp=CAU",
            }}
            alt="Avatar"
          />
        </Avatar>
        <VStack>
          <Text
            className={` fontSize-${moderateScale(
              18
            )} text-coolGray-200 font-semibold `}
          >
            {name}
          </Text>
          <Text
            className={` fontSize-${moderateScale(
              12
            )} font-[400] text-textGrey `}
          >
            {date || "12 Sept 2023"}
          </Text>
        </VStack>
      </HStack>
      <Text
        className={` lineHeight-${moderateScale(22)} fontSize-${moderateScale(
          16
        )} ml-${scale(58)} text-textDark-300 `}
      >
        Best place to enjoy nightlife in Lagos. Sound is perfect security is on
        point and there was no problem with finding a parking space. Got to see
        and had some premium drinks there, definitely can’t wait to be back
        here.
      </Text>
      {image ? (
        <Box className={` mt-${scale(10)} ml-${scale(50)} `}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mx-3 gap-3"
          >
            <Image
              source={require("../../assets/images/club1.jpeg")}
              alt=""
              className={` borderRadius-${moderateScale(8)} h-${verticalScale(
                120
              )} w-${scale(130)} mr-3 `}
            />
            <Image
              source={require("../../assets/images/hotel1.jpeg")}
              alt=""
              className={` borderRadius-${moderateScale(8)} h-${verticalScale(
                120
              )} w-${scale(130)} mr-3 `}
            />
            <Image
              source={require("../../assets/images/club2.jpeg")}
              alt=""
              className={` borderRadius-${moderateScale(8)} h-${verticalScale(
                120
              )} w-${scale(130)} `}
            />
          </ScrollView>
        </Box>
      ) : (
        ""
      )}
      <Box
        className={` ml-${scale(
          58
        )} my-3 flex-row items-center justify-between `}
      >
        <Text className="text-textDark-600 text-sm">
          Was this really helpful?
        </Text>
        <HStack space="md">
          <Button
            size="sm"
            action="primary"
            className="bg-textDark-600 border-textDark-600 border"
          >
            <ButtonText className="text-textPrimary">No</ButtonText>
          </Button>
          <Button size="sm" action="primary" className="bg-primary">
            <ButtonText className="text-coolGray-900">Yes</ButtonText>
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ClubReviews;

const styles = StyleSheet.create({});
