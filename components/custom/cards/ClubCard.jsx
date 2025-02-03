import { Text } from "@/components/ui/text";
import { Divider } from "@/components/ui/divider";
import { Box } from "@/components/ui/box";
import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navigation/screenNames';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ClubCard = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(SCREENS.home.card)}>
      <Box
        className={` borderRadius-${moderateScale(16)} w-${scale(158)} h-${verticalScale(210)} bg-secondary m-1 p-1 `}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF22pWQobEP7jY3xgI1GTL1LtZst_rKJWayw&usqp=CAU',
          }}
          style={styles.image}
        />
        <Box className="mt-3 ml-2">
          <Text className={` fontSize-${moderateScale(18)} font-[500] text-textPrimary `}>
            Club Quilox
          </Text>
        </Box>
        <Box className="flex-row gap-2 items-center ml-2">
          <Text className={` fontSize-${moderateScale(12)} text-textGrey `}>
            Club & Bar
          </Text>
          <Divider orientation="vertical" className="bg-textGrey h-[70%]" />
          <Text className={` fontSize-${moderateScale(12)} text-textGrey `}>
            7pm - 4am
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default ClubCard;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: verticalScale(150),
    borderRadius: moderateScale(16),
  },
});
