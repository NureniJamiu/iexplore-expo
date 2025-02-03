import { HStack } from "@/components/ui/hstack";
import { EyeIcon, EyeOffIcon, Icon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { FormControl, FormControlLabelText, FormControlLabel } from "@/components/ui/form-control";
import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomShowAndHidePasswordInput = ({
  type = 'password',
  color = '$textSecondary',
  label,
  labelColor = '$textSecondary',
  error = '',
  h = verticalScale(64),
  mx,
  keyboardType,
  borderRadius = '',
  placeholder = '',
  showPassword,
  togglePasswdShowHideState,
  ...rest
}) => {
  const [showIcon, setShowIcon] = useState(true);
  return (
    <FormControl className={` marginVertical-${verticalScale(10)} `}>
      <Input
        className={` mx-${mx} borderRadius-${borderRadius || '$xl'} h-${h} border-inputBackground focus:border-textSecondary bg-inputBackground `}>
        <VStack className="py-0.5 px-4 w-[100%] relative">
          {label && (
            <FormControlLabel className="mb-0.5">
              <FormControlLabelText className={` color-${labelColor} `}>
                {label}
              </FormControlLabelText>
            </FormControlLabel>
          )}
          <HStack className="w-[100%] justify-between items-start">
            <InputField
              type={!showPassword ? 'password' : 'text'}
              placeholder={placeholder}
              keyboardType={keyboardType}
              autoCorrect={false}
              keyboardAppearance="dark"
              {...rest}
              className={` fontSize-${moderateScale(18)} color-${color} font-[600] `} />

            {showPassword ? (
              <TouchableOpacity
                onPress={() => togglePasswdShowHideState(false)}>
                <Icon as={EyeOffIcon} className="text-textDark-500" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => togglePasswdShowHideState(true)}>
                <Icon as={EyeIcon} className="text-textDark-500" />
              </TouchableOpacity>
            )}
          </HStack>
        </VStack>
      </Input>
      {error && <Text className="text-red-500">{error}</Text>}
    </FormControl>
  );
};

export default CustomShowAndHidePasswordInput;

const styles = StyleSheet.create({});
