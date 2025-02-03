import { Text } from "@/components/ui/text";
import { Icon, MailIcon } from "@/components/ui/icon";
import { Center } from "@/components/ui/center";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navigation/screenNames';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HelpCard = ({icon, title, description}) => {
  const navigation = useNavigation();

  return (
    <Box className={` borderRadius-${moderateScale(12)} bg-secondary p-5 `}>
      <TouchableOpacity onPress={() => console.log('Clicked')}>
        <Center>
          <Box className="flex-row gap-2">
            <Icon as={icon} className="text-textPrimary" />
            <Text className="text-textPrimary font-semibold">
              {title}
            </Text>
          </Box>
          <Text className="text-textDark-500 text-center mt-3">
            {description}
          </Text>
        </Center>
      </TouchableOpacity>
    </Box>
  );
};

export default HelpCard;

const styles = StyleSheet.create({
  image: {
    height: verticalScale(100),
    width: '100%',
  },
});
