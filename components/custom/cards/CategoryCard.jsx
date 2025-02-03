import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import {StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

const CategoryCard = ({title = 'Clubs'}) => {
  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: 'https://i0.wp.com/discotech.me/wp-content/uploads/2018/11/japanesenightlife.jpg?ssl=1',
      }}>
      <LinearGradient
        colors={['rgba(15.07, 15.07, 15.07, 0.50)', 'rgba(33, 33, 33, 0.9)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <Text
        className={` fontSize-${moderateScale(18)} font-[500] text-textSecondary leading-2xl `}>
        {title}
      </Text>
    </ImageBackground>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    height: verticalScale(158),
    width: scale(158),
    borderRadius: moderateScale(8),
    overflow: 'hidden',
    paddingTop: verticalScale(120),
    paddingHorizontal: scale(16),
  },
});
