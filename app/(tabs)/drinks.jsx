import {
  BeerIcon,
  CupSodaIcon,
  GlassWaterIcon,
  MartiniIcon,
  MilkIcon,
  WineIcon,
} from "lucide-react-native";
import React, { useState } from "react";
import DashboardHeader from "@/components/custom/headers/DashboardHeader";
import DrinksCard from "@/components/custom/cards/DrinksCard";
import SearchFilterPanel from "@/components/custom/headers/SearchFilterPanel";
import CategoryButton from "@/components/custom/buttons/CategoryButton";
import CustomBottomSheet from "@/components/custom/modals/CustomBottomSheet";

export default function DrinksScreen() {
  const [openBottomSheet, setOpenBottomSheet] = useState(false);

  return (
    <div className="bg-background flex-1">
      <DashboardHeader />
      <SearchFilterPanel openBottomSheet={setOpenBottomSheet} />
      <div className="px-4 overflow-auto">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex flex-row justify-between my-2">
            <DrinksCard discount={true} />
            <DrinksCard discount={true} />
          </div>
        ))}
      </div>
      <CustomBottomSheet
        openModal={openBottomSheet}
        closeModal={() => setOpenBottomSheet(false)}
        modalSnapPoints={["58%"]}
        enablePanDownToClose={true}
      >
        <div className="bg-background w-full">
          <div className="absolute right-0 left-0 top-0 bg-background">
            <p className="text-center mb-4">Filter</p>
            <div className="flex flex-row flex-wrap gap-2">
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
            </div>
          </div>
        </div>
      </CustomBottomSheet>
    </div>
  );
}
