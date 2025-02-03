import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {BackIcon} from '../../assets/svg/BackIcon';

const ProfileHeader = ({title, color}) => {
  const navigation = useNavigation();
  return (
    <Box className="h-16 bg-secondary">
      <Box
        className="w-[100%] px-4 bottom-3 flex-row absolute justify-between items-center">
        <TouchableOpacity onPress={() => navigation.goBack()} flex={1}>
          <Box className="mb-2">
            <BackIcon paddingBottom={'$2'} color={color || '#FFD700'} />
          </Box>
        </TouchableOpacity>
        <Box style={styles.container}>
          <Text
            style={styles.centeredText}
            className={` color-${color || '$textSecondary'} pb-2 text-xl `}>
            {title}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },
  centeredText: {
    textAlign: 'center', // Center the text horizontally within the View component
  },
});
