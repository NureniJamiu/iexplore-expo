import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Input, InputIcon, InputSlot, InputField } from "@/components/ui/input";
import { FormControl, FormControlLabel, FormControlLabelText } from "@/components/ui/form-control";
import React, {useState} from 'react';
import {EyeIcon, EyeOffIcon} from 'lucide-react-native';
import {StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

const CustomInput = ({
  type = 'text',
  color = '$textPrimary',
  label,
  labelColor = '$textPrimary',
  error = '',
  bgColor = '$inputBackground',
  h = verticalScale(46),
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
    <FormControl className={` marginVertical-${verticalScale(10)} w-[100%] `}>
      <FormControlLabel className="mb-1.5">
        <FormControlLabelText className={` color-${labelColor} `}>{label}</FormControlLabelText>
      </FormControlLabel>
      <HStack className="w-[100%]">
        <VStack className="flex-1">
          <Input
            variant="underlined"
            size="md"
            className={` h-${h} bg-${bgColor} border-textSecondary grow-[1px] pr-2 `}>
            <InputField
              secureTextEntry={type === 'password' && !showPassword}
              placeholder=""
              keyboardType={keyboardType}
              autoCorrect={false}
              keyboardAppearance="dark"
              {...rest}
              className={` color-${color} px-4 mr-2 `} />
            {type === 'password' && (
              <InputSlot onPress={handleState} className="ml-2">
                <InputIcon
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  className="text-primary"
                />
              </InputSlot>
            )}
          </Input>
        </VStack>
      </HStack>
      {error && <Text className="text-red-500">{error}</Text>}
    </FormControl>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
