import {
  Button,
  ButtonIcon,
  ButtonSpinner,
  ButtonText,
} from "@/components/ui/button";
import React from "react";
import { moderateScale, verticalScale } from "react-native-size-matters";

const FlatButton = ({
  isLoading = false,
  width = "100%",
  color = "$textTertiary",
  borderColor = "$primary",
  borderWidth = 1,
  borderRadius = "$4xl",
  bgColor = "$primary",
  height = verticalScale(49),
  title = "Button Text",
  icon,
  onPress = () => {},
  fontSize = moderateScale(16),
  iconRight,
  variant = "solid",
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      action="primary"
      onPress={onPress}
      {...rest}
      className={` borderRadius-${borderRadius} backgroundColor-${bgColor} borderColor-${borderColor} borderWidth-${borderWidth} h-${height} w-${width} self-center my-2  active:bg-orange-200 `}
    >
      {isLoading ? (
        <ButtonSpinner />
      ) : (
        <>
          {icon && <ButtonIcon as={icon} className={` color-${color} mr-2 `} />}
          <ButtonText
            className={` fontSize-${fontSize} color-${color} font-[500] `}
          >
            {title}
          </ButtonText>
          {iconRight && (
            <ButtonIcon as={iconRight} className={` color-${color} ml-1 `} />
          )}
        </>
      )}
    </Button>
  );
};

export default FlatButton;
