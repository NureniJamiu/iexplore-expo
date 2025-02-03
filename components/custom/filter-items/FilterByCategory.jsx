import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import React from 'react';
import CategoryButton from '../buttons/CategoryButton';
import CustomInput from '../inputs/CustomInput';

const FilterByCategory = () => {
  return (
    <Box className="px-5 bg-secondary mx-4 flex-row rounded-md mt-2 py-5">
      <Box>
        <HStack className="flex-wrap gap-1.5">
          <CategoryButton />
          <CategoryButton title="Club" />
          <CategoryButton title="Beach" />
          <CategoryButton title="Restaurants" />
          <CategoryButton title="Bars" />
          <CategoryButton title="Lounge" />
        </HStack>
      </Box>
    </Box>
  );
};

export default FilterByCategory;
