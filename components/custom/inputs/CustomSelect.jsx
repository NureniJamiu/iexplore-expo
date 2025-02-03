import { Text } from "@/components/ui/text";

import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@/components/ui/select";

import { FormControl, FormControlLabel, FormControlLabelText } from "@/components/ui/form-control";
import { ChevronDownIcon, Icon } from "@/components/ui/icon";
import React from 'react';
import {StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

const CustomSelect = ({
  label,
  options,
  onValueChange,
  value,
  error,
  labelColor = '$textPrimary',
  bgColor = '$inputBackground',
  h = verticalScale(46),
  mx,
  borderRadius,
  ...rest
}) => {
  return (
    <FormControl className={` marginVertical-${verticalScale(10)} `}>
      {label && (
        <FormControlLabel className="mb-1.5">
          <FormControlLabelText className={` color-${labelColor} `}>
            {label}
          </FormControlLabelText>
        </FormControlLabel>
      )}
      <Select onValueChange={onValueChange} selectedValue={value}>
        <SelectTrigger
          variant="underlined"
          size="md"
          className={` h-${h} bg-${bgColor} border-textSecondary `}>
          <SelectInput {...rest} className="text-textPrimary px-4 mt-1" />
          <SelectIcon className="mr-5 mt-1">
            <Icon as={ChevronDownIcon} className="text-primary" />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {options.map(option => (
              <SelectItem
                key={option.value}
                label={option.label}
                value={option.value}
              />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
      {error && <Text className="text-red-500">{error}</Text>}
    </FormControl>
  );
};

export default CustomSelect;

const styles = StyleSheet.create({});
