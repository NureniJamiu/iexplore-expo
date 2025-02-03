import React from "react";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const CategoryButton = ({
  title = "All",
  active = false,
  icon,
  borderRadius = "$full",
  onPress = () => {},
}) => {
  return (
    <Button
      variant="solid"
      action="primary"
      onPress={onPress}
      className={` borderRadius-${borderRadius} ${
        active || title === "All" ? "bg-primary" : "bg-inputBackground"
      } p-1.5 mr-2 self-center  active:bg-primary my-2 `}
    >
      {icon && <ButtonIcon as={icon} className="mr-2 text-tertiary" />}
      <ButtonText
        className={` fontSize-${moderateScale(15)} ${
          active || title === "All" ? "text-textDark-400" : "text-tertiary"
        } font-[500] `}
      >
        {title}
      </ButtonText>
    </Button>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({});
