import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ShareIcon } from "@/assets/svg/ShareIcon";
import { BookmarkIcon } from "@/assets/svg/BookmarkIcon";
import { BackIcon } from "@/assets/svg/BackIcon";

const CardHeader = () => {
  const navigation = useNavigation();
  return (
    <Box className="h-16 bg-secondary">
      <Box
        className="absolute bottom-2 px-4 flex-row justify-between w-[100%] items-center">
        <TouchableOpacity onPress={() => navigation.goBack()} flex={1}>
          <Box className="mb-2">
            <BackIcon />
          </Box>
        </TouchableOpacity>

        <Text className="text-textSecondary text-xl">
          Club Quilox
        </Text>
        <HStack className="gap-4">
          <ShareIcon />
          <BookmarkIcon />
        </HStack>
      </Box>
    </Box>
  );
};

export default CardHeader;

const styles = StyleSheet.create({});
