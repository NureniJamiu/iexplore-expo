import { Text } from "@/components/ui/text";
import {StyleSheet, View} from 'react-native';
import React from 'react';

const CustomText = () => {
  return (
    <View>
      <Text size="2xl" className="text-textPrimary font-bold">
        Connecting you to the best of nightlife made for you.
      </Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({});
