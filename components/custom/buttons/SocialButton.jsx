import React from "react";
import {
  Button,
  ButtonIcon,
  ButtonSpinner,
  ButtonText,
} from "@/components/ui/button";
import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const SocialButton = ({
  isLoading = false,
  width = scale(198),
  height = verticalScale(33),
  title = "Button Text",
  icon,
  onPress = () => {},
}) => {
  return (
    <Button
      variant="solid"
      action="primary"
      onPress={onPress}
      className={` h-${height} w-${width} self-center bg-white rounded-lg my-2  active:bg-[#f2f2f2] `}
    >
      {isLoading ? (
        <ButtonSpinner />
      ) : (
        <>
          <ButtonIcon as={icon} className="mr-2" />
          <ButtonText
            className={` fontSize-${moderateScale(
              14
            )} text-[#685740] font-[500] `}
          >
            {title}
          </ButtonText>
        </>
      )}
    </Button>
  );
};

export default SocialButton;

const styles = StyleSheet.create({});
