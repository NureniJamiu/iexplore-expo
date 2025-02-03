import { Pressable } from "@/components/ui/pressable";
import { Image } from "@/components/ui/image";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import React from "react";
import { BackIcon } from "@/assets/svg/BackIcon";
import { useRouter } from "expo-router";

const GlobalHeader = ({
  showBackButton = true,
  backIconColor = "#F6F6F6",
  backIconSize = 32,
}) => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  return (
    <Box
      safeAreaTop
      className="bg-background border h-[60px] w-[100%] justify-center px-4">
      <HStack className="w-[100%] items-center justify-between">
        {/* Left section - Custom Back button */}
        <Box className="w-[40px]">
          {showBackButton && (
            <Pressable
              onPress={handleBackPress}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <BackIcon
                width={backIconSize}
                height={backIconSize}
                stroke={backIconColor}
              />
            </Pressable>
          )}
        </Box>

        {/* Center section - Logo */}
        <Box className="flex-1 items-center">
          <Image
            source={require("@/assets/images/iexplore-header-logo.png")}
            alt="App Logo"
            resizeMode="contain"
            className="w-[120px] h-[40px]" />
        </Box>

        {/* Right section - Empty space to balance the layout */}
        <Box className="w-[40px]" />
      </HStack>
    </Box>
  );
};

export default GlobalHeader;
