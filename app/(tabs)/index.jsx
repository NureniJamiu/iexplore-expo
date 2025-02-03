import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Divider } from "@/components/ui/divider";
import FilterButton from "@/components/custom/buttons/FilterButton";
import EventCard from "@/components/custom/cards/EventCard";
import TopSpotCard from "@/components/custom/cards/TopSpotCard";
import VenueCard from "@/components/custom/cards/VenueCard";
import FilterByCategory from "@/components/custom/filter-items/FilterByCategory";
import FilterByRating from "@/components/custom/filter-items/FilterByRating";
import DashboardHeader from "@/components/custom/headers/DashboardHeader";
import SectionHeader from "@/components/custom/headers/SectionHeader";
import CustomSearchInput from "@/components/custom/inputs/CustomSearchInput";
import { apiGet } from "@/lib/api/api-service";
import { url } from "@/lib/api/url";

const CLUB_ONE = require("@/assets/images/club1.jpeg");
const CLUB_TWO = require("@/assets/images/club2.jpeg");
const CLUB_THREE = require("@/assets/images/club3.jpeg");
const HOTEL_ONE = require("@/assets/images/hotel1.jpeg");
const HOTEL_TWO = require("@/assets/images/hotel2.jpeg");
const RESTAURANT_ONE = require("@/assets/images/restaurant1.jpeg");
const RESTAURANT_TWO = require("@/assets/images/restaurant2.jpeg");

export default function HomeScreen() {
  const navigation = useNavigation();
  const [venues, setVenues] = useState(null);

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const { response } = await apiGet(url.getSpots);
        setVenues(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSpots();
  }, []);

  console.log("Venues: ", venues);

  const defaultState = {
    category: false,
    rating: false,
  };

  const [isActive, setIsActive] = useState(defaultState);

  const handleCategoryPress = () => {
    setIsActive({ ...defaultState, category: !isActive.category });
  };

  const handleRatingPress = () => {
    setIsActive({ ...defaultState, rating: !isActive.rating });
  };

  return (
    <Box className="bg-background flex flex-col min-h-screen">
      <DashboardHeader />
      <Box className="px-4">
        <CustomSearchInput placeholder="Search for..." />
      </Box>
      <Box className="overflow-auto">
        <Box className="mt-1 px-4 flex gap-2 justify-between">
          <FilterButton
            title="Category"
            active={isActive.category}
            onPress={handleCategoryPress}
          />
          <FilterButton
            title="Rating"
            active={isActive.rating}
            onPress={handleRatingPress}
          />
        </Box>
        {isActive.category && <FilterByCategory />}
        {isActive.rating && <FilterByRating />}
        <Box className="px-4">
          <SectionHeader />
          <Box className="flex overflow-x-auto space-x-4">
            <VenueCard name="Club 52" />
            <VenueCard name="Club Quilox" image={CLUB_TWO} />
            <VenueCard />
            <VenueCard />
          </Box>
          <Divider className="h-1 bg-secondary mt-6" />
        </Box>
        <Box className="px-4">
          <SectionHeader title="Bars & Pubs" />
          <Box className="flex overflow-x-auto space-x-4">
            <VenueCard image={HOTEL_ONE} />
            <VenueCard image={HOTEL_TWO} />
            <VenueCard image={HOTEL_ONE} />
            <VenueCard image={HOTEL_TWO} />
          </Box>
          <Divider className="h-1 bg-secondary mt-6" />
        </Box>
        <Box className="px-4">
          <Text className="mb-2 text-xl font-extrabold text-textSecondary">
            Recommended events
          </Text>
          <Box className="flex overflow-x-auto space-x-4">
            <EventCard image={CLUB_THREE} />
            <EventCard title="MC party jump off" location="Club Quilox" />
            <EventCard image={CLUB_ONE} />
          </Box>
          <Divider className="h-1 bg-secondary mt-6" />
        </Box>
        <Box className="px-4">
          <SectionHeader title="Hotels" />
          <Box className="flex overflow-x-auto space-x-4">
            <VenueCard name="Claintro Signature" image={HOTEL_ONE} />
            <VenueCard name="Cactus Restaurant" image={HOTEL_TWO} />
            <VenueCard />
            <VenueCard />
          </Box>
          <Divider className="h-1 bg-secondary mt-6" />
        </Box>
        <Box className="px-4">
          <SectionHeader title="Restaurants" />
          <Box className="flex overflow-x-auto space-x-4">
            <VenueCard name="Claintro Signature" image={RESTAURANT_ONE} />
            <VenueCard name="Cactus Restaurant" image={RESTAURANT_TWO} />
            <VenueCard />
            <VenueCard />
          </Box>
          <Divider className="h-1 bg-secondary mt-6" />
        </Box>
        <Box className="px-4">
          <Text className="text-xl font-extrabold text-textSecondary">
            Iexplore spots this week
          </Text>
          <Box className="my-5 gap-3">
            <Box className="flex flex-wrap gap-3 w-full justify-between">
              <TopSpotCard number="1" />
              <TopSpotCard number="2" image={HOTEL_TWO} />
              <TopSpotCard number="3" image={RESTAURANT_TWO} />
              <TopSpotCard number="4" image={CLUB_ONE} />
              <TopSpotCard number="5" image={RESTAURANT_TWO} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
