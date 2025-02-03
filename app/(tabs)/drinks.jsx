import {
  BeerIcon,
  CupSodaIcon,
  GlassWaterIcon,
  MartiniIcon,
  MilkIcon,
  WineIcon,
} from "lucide-react-native";
import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import DashboardHeader from "@/components/custom/headers/DashboardHeader";
import DrinksCard from "@/components/custom/cards/DrinksCard";
import SearchFilterPanel from "@/components/custom/headers/SearchFilterPanel";
import CategoryButton from "@/components/custom/buttons/CategoryButton";
import CustomBottomSheet from "@/components/custom/modals/CustomBottomSheet";

export default function DrinksScreen() {
  const [openBottomSheet, setOpenBottomSheet] = useState(false);

  return (
    <Box className="bg-background flex-1">
      <DashboardHeader />
      <SearchFilterPanel openBottomSheet={setOpenBottomSheet} />
      <Box className="px-4 overflow-auto">
        {[...Array(5)].map((_, index) => (
          <Box key={index} className="flex flex-row justify-between my-2">
            <DrinksCard discount={true} />
            <DrinksCard discount={true} />
          </Box>
        ))}
      </Box>
      <CustomBottomSheet
        openModal={openBottomSheet}
        closeModal={() => setOpenBottomSheet(false)}
        modalSnapPoints={["58%"]}
        enablePanDownToClose={true}
      >
        <Box className="bg-background w-full">
          <Box className="absolute right-0 left-0 top-0 bg-background">
            <Text className="text-center mb-4">Filter</Text>
            <Box className="flex flex-row flex-wrap gap-2">
              <CategoryButton />
              <CategoryButton title="Beer" icon={BeerIcon} />
              <CategoryButton title="Alc wine" icon={WineIcon} />
              <CategoryButton title="Non-alc wine" icon={WineIcon} />
              <CategoryButton title="Soft drinks" icon={CupSodaIcon} />
              <CategoryButton title="Cocktail & mixers" icon={MartiniIcon} />
              <CategoryButton title="Spirits" icon={MilkIcon} />
              <CategoryButton title="Vodka" icon={MilkIcon} />
              <CategoryButton title="Champagne" icon={MartiniIcon} />
              <CategoryButton title="Others" icon={GlassWaterIcon} />
            </Box>
          </Box>
        </Box>
      </CustomBottomSheet>
    </Box>
  );
}
