import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { HStack } from "@/components/ui/hstack";
import { FormControl, FormControlLabel, FormControlLabelText } from "@/components/ui/form-control";
import {EyeIcon, EyeOffIcon} from 'lucide-react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';

const CustomInput = ({
  type = 'text',
  color = '$textSecondary',
  label,
  labelColor = '$textSecondary',
  error = '',
  bgColor = '$inputBackground',
  h = verticalScale(64),
  mx,
  keyboardType,
  borderRadius,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleState = () => {
    setShowPassword(prevState => !prevState);
  };

  // Determine the input type based on `type` prop and `showPassword` state
  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <FormControl className={` marginVertical-${verticalScale(10)} `}>
      <Input
        className={` mx-${mx} bg-${bgColor} borderRadius-${borderRadius || '$xl'} h-${h} border-textTertiary `}>
        <VStack className="py-0.5 px-4 w-[100%]">
          {label && (
            <FormControlLabel className="mb-0.5">
              <FormControlLabelText className={` color-${labelColor} `}>
                {label}
              </FormControlLabelText>
            </FormControlLabel>
          )}

          <HStack>
            <InputField
              secureTextEntry={type === 'password' && !showPassword}
              placeholder=""
              keyboardType={keyboardType}
              autoCorrect={false}
              keyboardAppearance="dark"
              {...rest}
              className={` fontSize-${moderateScale(20)} color-${color} font-[600] `} />

            {type === 'password' && (
              <InputSlot onPress={handleState}>
                <InputIcon
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  className="text-primary"
                />
              </InputSlot>
            )}
          </HStack>
        </VStack>
      </Input>
      {error && <Text className="text-red-500">{error}</Text>}
    </FormControl>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
