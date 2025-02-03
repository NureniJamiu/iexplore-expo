import { Text } from "@/components/ui/text";
import { Input, InputField, InputSlot } from "@/components/ui/input";
import { Icon, SearchIcon } from "@/components/ui/icon";
import { HStack } from "@/components/ui/hstack";
import { FormControl } from "@/components/ui/form-control";
import { Box } from "@/components/ui/box";
import {X} from 'lucide-react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';

const CustomSearchInput = ({
  type = 'text',
  color = '$textSecondary',
  error = '',
  h = verticalScale(40),
  mx,
  keyboardType,
  borderRadius = '$4xl',
  placeholder = 'Search',
  ...rest
}) => {
  const [showSearchIcon, setShowSearchIcon] = useState(true);
  const [showCancelIcon, setShowCancelIcon] = useState(false);
  return (
    <FormControl className={` marginVertical-${verticalScale(5)} `}>
      <Input
        className={` mx-${mx} borderRadius-${borderRadius || '$xl'} h-${h} border-0 focus:border-textSecondary  bg-textPrimary bg-inputBackground `}>
        <HStack className="w-[100%] items-center justify-center px-4 py-0.5">
          {showSearchIcon && <Icon as={SearchIcon} className="text-textDark-500" />}
          <InputField
            type={type}
            defaultValue={placeholder}
            keyboardType={keyboardType}
            autoCorrect={false}
            onFocus={() => {
              setShowSearchIcon(false);
              setShowCancelIcon(true);
            }}
            onBlur={() => {
              setShowSearchIcon(true);
              setShowCancelIcon(false);
            }}
            keyboardAppearance="dark"
            {...rest}
            className={` fontSize-${moderateScale(17)} text-tertiary `} />
          {showCancelIcon && (
            <InputSlot>
              <Box className={` borderRadius-${moderateScale(100)} bg-tertiary p-0.5 `}>
                <Icon
                  as={X}
                  onPress={() => {
                    console.log('Cancel');
                  }}
                  className="text-secondary"
                />
              </Box>
            </InputSlot>
          )}
        </HStack>
      </Input>
      {error && <Text className="text-red-500">{error}</Text>}
    </FormControl>
  );
};

export default CustomSearchInput;

const styles = StyleSheet.create({});
