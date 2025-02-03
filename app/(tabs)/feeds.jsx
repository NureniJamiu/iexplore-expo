import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FAB } from "react-native-paper";
import { scale } from "react-native-size-matters";
import DashboardHeader from "@/components/custom/headers/DashboardHeader";
import Thumbnail from "@/components/custom/image/Thumbnail";

export default function FeedScreen() {
  const [fabOpen, setFabOpen] = useState(false);

  const handleFabPress = () => {
    setFabOpen(!fabOpen);
  };

  const handleGoLive = () => {
    console.log("Go Live button pressed");
    setFabOpen(false);
  };

  const handleOpenGallery = () => {
    console.log("Open Gallery button pressed");
    setFabOpen(false);
  };

  return (
    <View className="bg-background flex-1">
      <DashboardHeader />
      <ScrollView className="flex-1">
        <View
          className="m-4 rounded-lg overflow-hidden"
          style={{ width: scale(59), height: scale(25) }}
        >
          <LinearGradient
            colors={["#F61E86", "#FF9900"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 1]}
            className="flex-1 justify-center items-center"
          >
            <Text className="text-white">Live</Text>
          </LinearGradient>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row space-x-2 px-4"
        >
          {[...Array(7)].map((_, index) => (
            <Thumbnail
              key={index}
              imageUrls={[
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
              ]}
              size={85}
              isLive
            />
          ))}
        </ScrollView>
        <View className="px-4 mt-12 mb-4">
          <Text className="mb-2 text-white text-xl font-extrabold">Feeds</Text>
          {[...Array(3)].map((_, rowIndex) => (
            <View key={rowIndex} className="flex-row justify-between my-2">
              {[...Array(3)].map((_, colIndex) => (
                <Thumbnail
                  key={colIndex}
                  imageUrls={[
                    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                  ]}
                  name="Max Smith"
                />
              ))}
            </View>
          ))}
        </View>
        <View className="px-4 my-4">
          <Text className="mb-2 text-white text-xl font-extrabold">Viewed</Text>
          {[...Array(2)].map((_, rowIndex) => (
            <View key={rowIndex} className="flex-row justify-between my-2">
              {[...Array(3)].map((_, colIndex) => (
                <Thumbnail
                  key={colIndex}
                  imageUrls={[
                    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                  ]}
                  isViewed
                />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
      <FAB.Group
        open={fabOpen}
        icon={fabOpen ? "close" : "plus"}
        actions={[
          { icon: "video", label: "Go Live", onPress: handleGoLive },
          { icon: "image", label: "Share Moment", onPress: handleOpenGallery },
        ]}
        onStateChange={({ open }) => setFabOpen(open)}
      />
    </View>
  );
}
