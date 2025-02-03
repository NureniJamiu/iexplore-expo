import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { BackIcon } from "@/assets/svg/BackIcon";

const DrinkHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <Box className="h-16 bg-background">
      <Box
        className="absolute bottom-2 px-4 flex-row justify-between w-[100%] items-center">
        <TouchableOpacity flex={1} onPress={() => navigation.goBack()}>
          <Box className="mb-2">
            <BackIcon />
          </Box>
        </TouchableOpacity>
        <Text className="text-textPrimary text-xl w-3/5 text-center">
          {title}
        </Text>
        <HStack className="gap-4"></HStack>
      </Box>
    </Box>
  );
};

export default DrinkHeader;

const styles = StyleSheet.create({});
