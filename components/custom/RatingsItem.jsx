import { CircleIcon } from "@/components/ui/icon";
import { Box } from "@/components/ui/box";
import {
  RadioIndicator,
  RadioLabel,
  Radio,
  RadioIcon,
} from "@/components/ui/radio";
import { HStack } from "@/components/ui/hstack";
import React, { useRef } from "react";
import { StyleSheet } from "react-native";

const RatingsItem = ({ stars, index, values, setValues }) => {
  const radioRef = useRef(null);
  const handleRadioChange = (e) => {
    e.preventDefault();
    const checkboxValue = radioRef.current.checked;
  };
  return (
    <Box className="py-3">
      <HStack className="flex-row items-center gap-2">
        <Radio
          value={stars.count + "stars"}
          ref={radioRef}
          onChange={handleRadioChange}
          size="md"
          isInvalid={false}
          isDisabled={false}
          className="text-primary"
        >
          <RadioIndicator className="mr-2">
            <RadioIcon
              as={CircleIcon}
              strokeWidth={1}
              className="text-primary bg-primary"
            />
          </RadioIndicator>
          <RadioLabel>{stars.count} Stars</RadioLabel>
        </Radio>
        <HStack className="gap-2">
          <HStack className="flex-row items-center gap-2">{stars.value}</HStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export default RatingsItem;

const styles = StyleSheet.create({
  radio: {
    accentColor: "red",
  },
});
