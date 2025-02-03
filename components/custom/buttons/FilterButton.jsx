import React from "react";
import { ChevronDownIcon } from "@/components/ui/icon";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { moderateScale } from "react-native-size-matters";

const FilterButton = ({
  width = "$full",
  title = "Button Text",
  icon,
  onPress = () => {},
  active,
}) => {
  return (
    <Button
      variant="solid"
      action="primary"
      onPress={onPress}
      className={` ${
        active ? "bg-primary" : "bg-inputBackground"
      } py-${moderateScale(8)} px-${moderateScale(
        37
      )} w-${width} flex-1  active:bg-primary rounded-4xl `}
    >
      <ButtonText
        className={` fontSize-${moderateScale(16)} text-tertiary font-[500] `}
      >
        {title}
      </ButtonText>
      <ButtonIcon as={ChevronDownIcon} className="ml-4 text-tertiary" />
    </Button>
  );
};

export default FilterButton;
