import React from "react";
import { StyleSheet } from "react-native";
import { Box, Divider, HStack, ScrollView, Text } from "@gluestack-ui/themed";
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
    <Box bg="$background" flex={1}>
      <DashboardHeader />
      <Box px="$4">
        <CustomSearchInput placeholder="Search for..." />
      </Box>
      <ScrollView>
        <ScrollView mx="$4" horizontal showsHorizontalScrollIndicator={false}>
          <CategoryButton title="Bars & Pubs" icon={DrumstickIcon} />
          <CategoryButton title="Clubs" icon={Club} />
          <CategoryButton title="Hotels" icon={Hotel} />
          <CategoryButton title="Restaurants" icon={SoupIcon} />
        </ScrollView>

        <Box px={"$4"} mt="$4">
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
        <Box mt={"$10"} px={"$4"}>
          <SectionHeader />
          <Box gap="$4" justifyContent="space-between" my={"$1"}>
            <SpotCard />
            <SpotCard />
            <SpotCard />
          </Box>
        </Box>
        <Box px="$4" mt="$5">
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

const styles = StyleSheet.create({
  mapBg: {
    height: verticalScale(130),
    paddingHorizontal: scale(40),
    paddingTop: verticalScale(80),
  },
});
