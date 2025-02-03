import { Box, Divider, HStack, ScrollView, Text } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import FilterButton from "@/components/custom//buttons/FilterButton";
import EventCard from "@/components/custom//cards/EventCard";
import TopSpotCard from "@/components/custom//cards/TopSpotCard";
import VenueCard from "@/components/custom//cards/VenueCard";
import FilterByCategory from "@/components/custom//filter-items/FilterByCategory";
import FilterByRating from "@/components/custom//filter-items/FilterByRating";
import DashboardHeader from "@/components/custom//headers/DashboardHeader";
import SectionHeader from "@/components/custom//headers/SectionHeader";
import CustomSearchInput from "@/components/custom//inputs/CustomSearchInput";
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
      } finally {
        // setLoading(false);
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
    <Box bg="$background" flex={1}>
      <DashboardHeader />
      <Box px="$4">
        <CustomSearchInput placeholder="Search for..." />
      </Box>
      <ScrollView>
        <Box
          mt="$1"
          px="$4"
          gap="$2"
          flexDirection="row"
          justifyContent="space-between"
        >
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
        <Box px={"$4"}>
          <Box>
            <SectionHeader />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <VenueCard name="Club 52" />
              <VenueCard name="Club Quilox" image={CLUB_TWO} />
              <VenueCard />
              <VenueCard />
            </ScrollView>
          </Box>
          <Divider h={1} bg="$secondary" mt={"$6"} />
        </Box>
        <Box px={"$4"}>
          <Box>
            <SectionHeader title="Bars & Pubs" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <VenueCard image={HOTEL_ONE} />
              <VenueCard image={HOTEL_TWO} />
              <VenueCard image={HOTEL_ONE} />
              <VenueCard image={HOTEL_TWO} />
            </ScrollView>
          </Box>
          <Divider h={1} bg="$secondary" mt={"$6"} />
        </Box>
        <Box px={"$4"}>
          <Text
            mb="$2"
            fontSize="$xl"
            lineHeight="$2xl"
            color="$textSecondary"
            fontWeight="800"
          >
            Recommended events
          </Text>
          <Box>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <EventCard image={CLUB_THREE} />
              <EventCard title="MC party jump off" location="Club Quilox" />
              <EventCard image={CLUB_ONE} />
            </ScrollView>
          </Box>
          <Divider h={1} bg="$secondary" mt={"$6"} />
        </Box>
        <Box px={"$4"}>
          <Box>
            <SectionHeader title="Hotels" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <VenueCard name="Claintro Signature" image={HOTEL_ONE} />
              <VenueCard name="Cactus Restaurant" image={HOTEL_TWO} />
              <VenueCard />
              <VenueCard />
            </ScrollView>
            <Divider h={1} bg="$secondary" mt={"$6"} />
          </Box>
        </Box>

        <Box px={"$4"}>
          <Box>
            <SectionHeader title="Restaurants" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <VenueCard name="Claintro Signature" image={RESTAURANT_ONE} />
              <VenueCard name="Cactus Restaurant" image={RESTAURANT_TWO} />
              <VenueCard />
              <VenueCard />
            </ScrollView>
            <Divider h={1} bg="$secondary" mt={"$6"} />
          </Box>
        </Box>
        <Box px="$4">
          <Text
            fontSize="$xl"
            lineHeight="$2xl"
            color="$textSecondary"
            fontWeight="800"
          >
            Iexplore spots this week
          </Text>
          <Box my="$5" gap="$3">
            <HStack
              gap="$3"
              w="$full"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <TopSpotCard number="1" />
              <TopSpotCard number="2" image={HOTEL_TWO} />
              <TopSpotCard number="3" image={RESTAURANT_TWO} />
              <TopSpotCard number="4" image={CLUB_ONE} />
              <TopSpotCard number="5" image={RESTAURANT_TWO} />
            </HStack>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}
