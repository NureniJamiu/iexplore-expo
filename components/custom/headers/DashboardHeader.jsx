import { Box } from "@/components/ui/box";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { verticalScale } from "react-native-size-matters";
import { HeaderLogo } from "@/assets/svg/HeaderLogo";
import ProfileAvatar from "../image/ProfileAvatar";

const DashboardHeader = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Profile Screen");
  };

  return (
    <Box className="h-20 bg-background">
      <Box
        className="absolute bottom-2 px-4 flex-row justify-between w-[100%] items-center">
        <HeaderLogo h={verticalScale(38)} w={124} />
        <ProfileAvatar onPress={() => navigation.navigate("Profile Screen")} />
      </Box>
    </Box>
  );
};

export default DashboardHeader;

const styles = StyleSheet.create({});
