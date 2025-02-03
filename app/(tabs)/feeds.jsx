import { Box, ScrollView, Text } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FAB } from "react-native-paper";
import { moderateScale, scale } from "react-native-size-matters";
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

  const handleCloseFab = () => {
    setFabOpen(false);
  };

  return (
    <Box bg="$background" flex={1}>
      <DashboardHeader />
      <ScrollView style={{ flex: 1 }}>
        <Box>
          <Box
            w={scale(59)}
            h={scale(25)}
            m={"$4"}
            borderRadius={moderateScale(8)}
            overflow="hidden"
          >
            <LinearGradient
              colors={["#F61E86", "#FF9900"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              locations={[0, 1]}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text color="$white">Live</Text>
            </LinearGradient>
          </Box>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Box flexDirection="row" justifyContent="space-between" gap={"$2"}>
              <Thumbnail
                pr={"$10"}
                imageUrls={[
                  "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                  "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
                ]}
                size={85}
                isLive
              />
              <Thumbnail
                imageUrls={[
                  "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                  "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
                ]}
                size={85}
                isLive
              />
              <Thumbnail
                imageUrls={[
                  "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                  "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
                ]}
                size={85}
                isLive
              />
              <Thumbnail
                imageUrls={[
                  "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                  "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
                ]}
                size={85}
                isLive
              />
              <Thumbnail
                imageUrls={[
                  "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                  "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
                ]}
                size={85}
                isLive
              />
              <Thumbnail
                imageUrls={[
                  "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                  "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
                ]}
                size={85}
                isLive
              />
              <Thumbnail
                imageUrls={[
                  "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                  "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
                ]}
                size={85}
                isLive
              />
            </Box>
          </ScrollView>
        </Box>
        <Box px={"$4"} mt="$12" mb={"$4"}>
          <Text
            mb="$2"
            color="$white"
            fontSize={moderateScale(24)}
            lineHeight={28}
            fontWeight="800"
          >
            Feeds
          </Text>
          <Box flexDirection="row" justifyContent="space-between" my={"$2"}>
            <Thumbnail
              imageUrls={[
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
              ]}
              name="Max Smith"
            />
            <Thumbnail
              imageUrls={[
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
              ]}
              name="Max Smith"
            />
            <Thumbnail
              imageUrls={[
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
              ]}
              name="Max Smith"
            />
          </Box>
          <Box flexDirection="row" justifyContent="space-between" my={"$2"}>
            <Thumbnail
              imageUrls={[
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
              ]}
              name="Max Smith"
            />
            <Thumbnail
              imageUrls={[
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
              ]}
              name="Max Smith"
            />
            <Thumbnail
              imageUrls={[
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
              ]}
              name="Max Smith"
            />
          </Box>
          <Box flexDirection="row" justifyContent="space-between" my={"$2"}>
            <Thumbnail
              imageUrls={[
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
              ]}
              name="Max Smith"
            />
            <Thumbnail
              imageUrls={[
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
              ]}
              name="Max Smith"
            />
            <Thumbnail
              imageUrls={[
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
              ]}
              name="Max Smith"
            />
          </Box>
          <Box flexDirection="row" justifyContent="" my={"$2"} gap="$1">
            <Thumbnail
              imageUrls={[
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
              ]}
              name="Max Smith"
            />
            <Thumbnail
              imageUrls={[
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
              ]}
              name="Max Smith"
            />
          </Box>
        </Box>
        <Box px={"$4"} my={"$4"}>
          <Text
            mb="$2"
            color="$white"
            fontSize={moderateScale(24)}
            lineHeight={28}
            fontWeight="800"
          >
            Viewed
          </Text>
          <Box flexDirection="row" justifyContent="space-between" my={"$2"}>
            <Thumbnail
              styles={styles.greyRings}
              imageUrls={[
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
              ]}
              isViewed
            />
            <Thumbnail
              styles={styles.greyRings}
              imageUrls={[
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
              ]}
              isViewed
            />
            <Thumbnail
              styles={styles.greyRings}
              imageUrls={[
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
              ]}
              isViewed
            />
          </Box>
          <Box flexDirection="row" justifyContent="space-between" my={"$2"}>
            <Thumbnail
              styles={styles.greyRings}
              imageUrls={[
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
              ]}
              isViewed
            />
            <Thumbnail
              styles={styles.greyRings}
              h={moderateScale(110)} /*  */
              w={moderateScale(110)}
              imageUrls={[
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
              ]}
              isViewed
            />
            <Thumbnail
              styles={styles.greyRings}
              imageUrls={[
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
                "https://static.euronews.com/articles/stories/06/63/41/76/1200x675_cmsv2_90b2c6e4-a9df-52cb-b2f5-0676f4b097cb-6634176.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
              ]}
              isViewed
            />
          </Box>
        </Box>
      </ScrollView>
      <FAB.Group
        open={fabOpen}
        icon={fabOpen ? "close" : "plus"}
        actions={[
          { icon: "video", label: "Go Live", onPress: handleGoLive },
          { icon: "image", label: "Share Moment", onPress: handleOpenGallery },
        ]}
        onStateChange={({ open }) => setFabOpen(open)}
        onPress={handleFabPress}
        fabStyle={styles.fab}
        visible={true}
        overlayColor="rgba(0, 0, 0, 0.8)"
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  greyRings: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 1,
    borderColor: "grey",
  },
  fab: {
    backgroundColor: "#FFD700",
  },
});
