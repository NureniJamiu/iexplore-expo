import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";
import { Image } from "@/components/ui/image";
import { HStack } from "@/components/ui/hstack";
import { CopyIcon, Icon } from "@/components/ui/icon";
import { Box } from "@/components/ui/box";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { X } from "lucide-react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from "react-native-size-matters";
import Swiper from "react-native-swiper";
import { CommentIcon } from "@/assets/svg/CommentIcon";
import { FavoriteIcon } from "@/assets/svg/FavoriteIcon";
import { ShareIcon } from "@/assets/svg/ShareIcon";
import FlatButton from "@/components/custom/buttons/FlatButton";

import CustomBottomSheet from "@/components/custom/modals/CustomBottomSheet";

export default function SingleFeedScreen({
  imageUrls,
  currentIndex = 0,
  onIndexChanged,
  userAvatar = "https://example.com/avatar.jpg",
  username = "John Doe",
  timePosted = "2h ago",
  description = "This is a very long description that will be truncated if it exceeds the maximum width of a single line on the screen...",
  onClose,
}) {
  const [openBottomSheet, setOpenBottomSheet] = useState(false);

  const SocialButton = ({ icon, count }) => (
    <TouchableOpacity onPress={() => setOpenBottomSheet(true)}>
      <VStack space="xs" className="items-center mb-2">
        <Box className="items-center justify-center">
          {icon}
        </Box>
        <Text className={` fontSize-${moderateScale(12)} text-textPrimary font-[600] `}>
          {count}
        </Text>
      </VStack>
    </TouchableOpacity>
  );

  return (
    <Box className="flex-1 w-[100%] h-[100%]">
      {/* Close Button */}
      <Pressable onPress={onClose} className="absolute right-4 top-4 z-1">
        <Box
          className="p-2.5 bg-textDark-300 border-[2px] rounded-full items-center justify-center">
          <Icon as={X} size={26} className="text-[#000]" />
        </Box>
      </Pressable>
      <Swiper
        loop={false}
        index={currentIndex}
        onIndexChanged={onIndexChanged}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        paginationStyle={styles.pagination}
      >
        {imageUrls.map((imageUrl, index) => (
          <Box key={index} className="flex-1">
            <Box style={styles.backgroundImage} className="bg-backgroundDark-900">
              <Image
                source={{ uri: imageUrl }}
                alt="Post image"
                style={styles.backgroundImage}
                resizeMode="cover"
              />
            </Box>
          </Box>
        ))}
      </Swiper>
      {/* Social Engagement Icons */}
      <VStack space="lg" className="absolute right-4 bottom-[4%] items-center z-25">
        <SocialButton icon={<FavoriteIcon />} count="200" />
        <SocialButton icon={<CommentIcon />} count="46" />
        <SocialButton icon={<ShareIcon />} count="12" />
      </VStack>
      {/* Overlay and User Info */}
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.6)", "rgba(0,0,0,0.8)"]}
        style={styles.overlay}
      >
        <VStack space="md" className="px-4 flex-1 justify-end">
          <HStack space="md" className="items-center mb-1">
            <Avatar size="lg" className="bg-primary">
              <AvatarImage source={{ uri: userAvatar }} alt={username} />
            </Avatar>
            <VStack className="mr-4">
              <Text className={` fontSize-${moderateScale(16)} text-textPrimary font-[700] `}>
                {username}
              </Text>
              <Text
                className={` fontSize-${moderateScale(14)} text-textDark-300 font-[400] `}>
                {timePosted}
              </Text>
            </VStack>
            <FlatButton
              title="Follow"
              fontWeight="600"
              width={scale(75)}
              fontSize={moderateScale(12)}
              borderRadius={moderateScale(4)}
              height={moderateVerticalScale(28)}
            />
          </HStack>

          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className={` fontSize-${moderateScale(15)} text-textPrimary w-[90%] font-[400] ml-1 mb-4 `}>
            {description}
          </Text>
        </VStack>
      </LinearGradient>
      <CustomBottomSheet
        openModal={openBottomSheet}
        closeModal={() => setOpenBottomSheet(false)}
        modalSnapPoints={["50%"]}
        zIndex={150}
        enablePanDownToClose={true}
      >
        <Box className="w-full">
          <Box className="absolute right-0 left-0 top-0">
            <Box className="items-center">
              <Text className="text-textSecondary">Use coupon to claim drink</Text>

              <HStack
                className="p-3 my-4 border-1 border-textTertiary rounded-lg bg-backgroundDark-900 justify-between items-center gap-2">
                <Text className="text-textPrimary">IEXPLORE25OFF</Text>
                <Icon as={CopyIcon} className="text-textPrimary" />
              </HStack>

              <Text className="text-textPrimary text-center mt-8 mb-16">
                Please use the provided coupon code{" "}
                <Text className="text-sm text-textSecondary">
                  'IEXPLORE25OFF'
                </Text>{" "}
                to redeem your drink offer at Club Quilox. Kindly note that this
                offer will expire 24 hours after you've claimed your drink on
                iexplore.
              </Text>

              <FlatButton
                title="Claim drink"
                onPress={() => navigation.navigate(SCREENS.drinks.congrats)}
              />
            </Box>
          </Box>
        </Box>
      </CustomBottomSheet>
    </Box>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "25%",
    paddingBottom: moderateScale(20),
  },
  dot: {
    backgroundColor: "#B0B0B0",
    borderWidth: 1,
    borderColor: "#FFF",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: "#FFC000",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  pagination: {
    bottom: "20%",
  },
});
