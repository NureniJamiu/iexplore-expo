import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import {moderateScale} from 'react-native-size-matters';
import {verticalScale} from 'react-native-size-matters';

const Category = ({title, images}) => {
  return (
    <Box>
      <Box className={` borderRadius-${moderateScale(6)} overflow-hidden `}>
        <Box className={` w-${scale(160)} flex-row gap-1 `}>
          <Image
            source={{
              uri: 'https://www.themanual.com/wp-content/uploads/sites/9/2020/01/wine-bottle-standard.jpg?p=1',
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: 'https://www.themanual.com/wp-content/uploads/sites/9/2020/01/wine-bottle-standard.jpg?p=1',
            }}
            style={styles.image}
          />
        </Box>
        <Box className={` w-${scale(160)} flex-row gap-1 `}>
          <Image
            source={{
              uri: 'https://www.themanual.com/wp-content/uploads/sites/9/2020/01/wine-bottle-standard.jpg?p=1',
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: 'https://www.themanual.com/wp-content/uploads/sites/9/2020/01/wine-bottle-standard.jpg?p=1',
            }}
            style={styles.image}
          />
        </Box>
      </Box>
      <Text
        className={` fontSize-${moderateScale(14)} font-[500] text-textPrimary pt-1.5 text-center `}>
        {title}
      </Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    height: verticalScale(85),
    width: '49%',
    resizeMode: 'cover',
  },
});

export default Category;
