import React from "react";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useNavigation, useRoute } from "@react-navigation/native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import SafePageContainer from "@/components/custom/containers/SafePageContainer";
import AuthHeader from "@/components/custom/headers/AuthHeader";

export default function CheckInboxScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { email = "" } = route.params;
  return (
    <SafePageContainer>
      <AuthHeader />
      <Box className="my-12">
        <Text
          className="text-textSecondary text-center font-semibold leading-2xl"
          style={{ fontSize: moderateScale(32) }}
        >
          Check your inbox
        </Text>
        <Text
          className="mx-16 mt-2 text-textSecondary text-center font-semibold leading-md"
          style={{ fontSize: moderateScale(16) }}
        >
          We’ve sent a code to {email}
        </Text>
      </Box>
      <Box className="px-10 mt-[100px]">
        <Button className="w-full h-[50px] self-center bg-primary rounded-md my-3 active:bg-orange-200">
          <ButtonText className="text-textTertiary">Open email app</ButtonText>
        </Button>
        <Button
          className="w-full h-[50px] self-center border border-primary rounded-md my-3"
          style={{ height: verticalScale(49.5) }}
          onPress={() => {
            navigation.navigate(SCREENS.auth.resetPasswordOtp, {
              reset: true,
            });
          }}
        >
          <ButtonText className="text-textSecondary">
            Enter code manually
          </ButtonText>
        </Button>
      </Box>
    </SafePageContainer>
  );
}
