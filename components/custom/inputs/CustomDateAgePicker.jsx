import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {verticalScale} from 'react-native-size-matters';

const CustomDateAgePicker = ({label = 'Age', setUserAge, setDate}) => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setselectedDate] = useState('');
  const [selectedAge, setSelectedAge] = useState('');

  const toggleDatePicker = () => {
    setDatePickerVisible(!isDatePickerVisible);
  };

  const handleDateConfirm = date => {
    const today = new Date();
    const birthDate = new Date(date);
    const age = today.getFullYear() - birthDate.getFullYear();
    const formattedDate = formatDate(date);
    setselectedDate(formattedDate);
    setSelectedAge(age);
    setUserAge(age);
    setDate(date);
    toggleDatePicker();
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={toggleDatePicker} >
      <Box className="my-1.5">
        <Text className="text-textPrimary">
          {label} {selectedAge && `(${selectedAge} years old)`}
        </Text>
      </Box>
      <Box
        variant="underlined"
        className={` h-${verticalScale(46)} border-textSecondary border-solid border border-b-primary justify-center mb-1.5 bg-inputBackground `}>
        <VStack className="w-[100%]">
          <Text className="text-textPrimary pl-4">
            {selectedDate}
          </Text>
        </VStack>
        <DateTimePickerModal
          display="spinner"
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={toggleDatePicker}
        />
      </Box>
    </TouchableOpacity>
  );
};

export default CustomDateAgePicker;

const styles = StyleSheet.create({});

export const formatDate = date => {
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  return new Date(date).toLocaleDateString('en-US', options);
};
