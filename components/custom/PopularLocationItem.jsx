import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import React from "react";
import { LocationIcon } from "../assets/svg/LocationIcon";

const PopularLocationItem = () => {
  return (
    <Box className="py-2">
      <HStack className="flex-row items-center gap-2">
        <LocationIcon />
        <Box>
          <Text className="text-secondary-100 font-semibold text-md">
            Lagos night club
          </Text>
          <Text className="text-secondary-400">Ikoyi, Lagos.</Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default PopularLocationItem;
