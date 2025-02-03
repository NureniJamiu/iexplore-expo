import {
  BeerIcon,
  CupSodaIcon,
  GlassWaterIcon,
  MartiniIcon,
  MilkIcon,
  WineIcon,
} from "lucide-react-native";
import React, { useState } from "react";
import { Box, HStack, ScrollView, Text } from "@gluestack-ui/themed";
import DashboardHeader from "@/components/custom/headers/DashboardHeader";
import DrinksCard from "@/components/custom/cards/DrinksCard";
import SearchFilterPanel from "@/components/custom/headers/SearchFilterPanel";
import CategoryButton from "@/components/custom/buttons/CategoryButton";
import CustomBottomSheet from "@/components/custom/modals/CustomBottomSheet";

export default function DrinksScreen() {
  const [openBottomSheet, setOpenBottomSheet] = useState(false);

  return (
    <Box bg="$background" flex={1}>
      <DashboardHeader />
      <SearchFilterPanel openBottomSheet={setOpenBottomSheet} />
      <ScrollView px={"$4"}>
        <Box flexDirection="row" justifyContent="space-between" my={"$2"}>
          <DrinksCard discount={true} />
          <DrinksCard discount={true} />
        </Box>
        <Box flexDirection="row" justifyContent="space-between" my={"$2"}>
          <DrinksCard discount={true} />
          <DrinksCard discount={true} />
        </Box>
        <Box flexDirection="row" justifyContent="space-between" my={"$2"}>
          <DrinksCard discount={true} />
          <DrinksCard discount={true} />
        </Box>
        <Box flexDirection="row" justifyContent="space-between" my={"$2"}>
          <DrinksCard discount={true} />
          <DrinksCard discount={true} />
        </Box>
        <Box flexDirection="row" justifyContent="space-between" my={"$2"}>
          <DrinksCard discount={true} />
          <DrinksCard discount={true} />
        </Box>
      </ScrollView>
      <CustomBottomSheet
        openModal={openBottomSheet}
        closeModal={() => setOpenBottomSheet(false)}
        modalSnapPoints={["58%"]}
        enablePanDownToClose={true}
      >
        <Box bg="$background" w={"$full"}>
          <Box position="absolute" right={0} left={0} top={0} bg="$background">
            <Text textAlign="center" mb="$4">
              Filter
            </Text>
            <HStack flexDirection="row" flexWrap="wrap" gap="$2">
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
            </HStack>
          </Box>
        </Box>
      </CustomBottomSheet>
    </Box>
  );
}
