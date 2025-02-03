import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { Divider } from "@/components/ui/divider";
import React from 'react';
import PopularLocationItem from '../PopularLocationItem';
import CustomSearchInput from '../inputs/CustomSearchInput';

const FilterByLocation = () => {
  return (
    <Box className="bg-background">
      <CustomSearchInput mx="$4" />
      <Box className="bg-secondary mx-4 flex-row rounded-md mt-0.5 py-5">
        <Box className="w-full">
          <VStack className="gap-1.5 w-full px-4">
            <PopularLocationItem />
            <Divider className="w-full bg-secondary-600" />
            <PopularLocationItem />
            <Divider className="w-full bg-secondary-600" />
            <PopularLocationItem />
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterByLocation;
