import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileAvatar = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate to the profile page when the avatar is pressed
    navigation.navigate(SCREENS.profile.profile);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.avatarContainer}>
      <Image
        source={{
          uri: "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-grey-600w-518740741.jpg",
        }}
        style={styles.avatarImage}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    borderRadius: 50,
    overflow: "hidden",
  },
  avatarImage: {
    width: 50, // Adjust the size as needed
    height: 50,
    borderRadius: 25,
  },
});

export default ProfileAvatar;
