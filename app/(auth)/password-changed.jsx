import React from "react";
import { StyleSheet } from "react-native";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import FlatButton from "@/components/custom/buttons/FlatButton";
import { ShieldIcon } from "@/assets/svg/ShieldIcon";

export default function PasswordChangedScreen({ navigation }) {
  return (
    <Box className="flex-1 justify-center items-center bg-background">
      <Box className="px-10 pb-7 justify-center items-center">
        <ShieldIcon />
        <Text className="my-5 font-semibold text-textSecondary text-3xl leading-8 text-center">
          Password changed
        </Text>
        <Text className="text-center text-textSecondary text-md mb-10">
          Your password has been changed successfully
        </Text>
      </Box>
      <FlatButton
        width="80%"
        title="Back to Login"
        onPress={() => {
          navigation.navigate(SCREENS.auth.login);
        }}
      />
    </Box>
  );
}

const styles = StyleSheet.create({});
