import React from "react";
import { StyleSheet } from "react-native";
import { Club, DrumstickIcon, Hotel, SoupIcon } from "lucide-react-native";
import { scale, verticalScale } from "react-native-size-matters";
import CategoryButton from "@/components/custom/buttons/CategoryButton";
import EventCard from "@/components/custom/cards/EventCard";
import SpotCard from "@/components/custom/cards/SpotCard";
import TopSpotCard from "@/components/custom/cards/TopSpotCard";
import DashboardHeader from "@/components/custom/headers/DashboardHeader";
import SectionHeader from "@/components/custom/headers/SectionHeader";
import CustomSearchInput from "@/components/custom/inputs/CustomSearchInput";

const CLUB_ONE = require("@/assets/images/club1.jpeg");
const CLUB_THREE = require("@/assets/images/club3.jpeg");
const HOTEL_TWO = require("@/assets/images/hotel2.jpeg");
const RESTAURANT_TWO = require("@/assets/images/restaurant2.jpeg");

export default function ExploreScreen() {
  return (
    <div className="bg-background flex-1">
      <DashboardHeader />
      <div className="px-4">
        <CustomSearchInput placeholder="Search for..." />
      </div>
      <div className="overflow-auto">
        <div className="mx-4 flex flex-row space-x-2 overflow-auto">
          <CategoryButton title="Bars & Pubs" icon={DrumstickIcon} />
          <CategoryButton title="Clubs" icon={Club} />
          <CategoryButton title="Hotels" icon={Hotel} />
          <CategoryButton title="Restaurants" icon={SoupIcon} />
        </div>

        <div className="px-4 mt-4">
          <p className="mb-2 text-xl leading-7 text-secondary font-extrabold">
            Recommended events
          </p>
          <div>
            <div className="flex flex-row space-x-2 overflow-auto">
              <EventCard image={CLUB_THREE} />
              <EventCard title="MC party jump off" location="Club Quilox" />
              <EventCard image={CLUB_ONE} />
            </div>
          </div>
          <div className="h-px bg-secondary mt-6"></div>
        </div>

        <div className="mt-10 px-4">
          <SectionHeader />
          <div className="flex flex-row gap-4 justify-between my-1">
            <SpotCard />
            <SpotCard />
            <SpotCard />
          </div>
        </div>

        <div className="px-4 mt-5">
          <p className="text-xl leading-7 text-secondary font-extrabold">
            Iexplore spots this week
          </p>
          <div className="my-5 gap-3">
            <div className="flex flex-wrap gap-3 w-full justify-between">
              <TopSpotCard number="1" />
              <TopSpotCard number="2" image={HOTEL_TWO} />
              <TopSpotCard number="3" image={RESTAURANT_TWO} />
              <TopSpotCard number="4" image={CLUB_ONE} />
              <TopSpotCard number="5" image={RESTAURANT_TWO} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  mapBg: {
    height: verticalScale(130),
    paddingHorizontal: scale(40),
    paddingTop: verticalScale(80),
  },
});
