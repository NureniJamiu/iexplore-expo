import { ScrollView } from "@/components/ui/scroll-view";
import { Pressable } from "@/components/ui/pressable";
import { Image } from "@/components/ui/image";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import React, {useRef, useState} from 'react';
import {Animated, Dimensions, PanResponder} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const SCREEN_WIDTH = Dimensions.get('window').width;
const THUMBNAIL_SIZE = 60;
const THUMBNAIL_SPACING = 8;
const VISIBLE_THUMBNAILS = 5;

const ImageSwiper = ({
  images,
  height = 300,
  thumbnailSize = THUMBNAIL_SIZE,
  activeColor = '#FFC000',
  inactiveColor = '#808080',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailScrollRef = useRef(null);
  const swiperScrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const lastOffset = useRef(0);

  // Animation values
  const scale = useRef(new Animated.Value(1)).current;
  const thumbnailScale = useRef(new Animated.Value(1)).current;

  // Calculate thumbnail section width
  const thumbnailSectionWidth =
    VISIBLE_THUMBNAILS * (thumbnailSize + THUMBNAIL_SPACING * 2);

  // Pan Responder for swipe gestures
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) > Math.abs(gestureState.dy);
      },

      onPanResponderGrant: evt => {
        startX.current = evt.nativeEvent.pageX;
        lastOffset.current = activeIndex * SCREEN_WIDTH;
      },

      onPanResponderMove: (_, gestureState) => {
        if (swiperScrollRef.current) {
          const newPosition = lastOffset.current - gestureState.dx;
          swiperScrollRef.current.scrollTo({
            x: newPosition,
            animated: false,
          });
        }
      },

      onPanResponderRelease: (_, gestureState) => {
        const dx = gestureState.dx;
        const targetIndex =
          dx > 0
            ? Math.floor(lastOffset.current / SCREEN_WIDTH)
            : Math.ceil(lastOffset.current / SCREEN_WIDTH);

        let newIndex = activeIndex;

        if (Math.abs(dx) > SCREEN_WIDTH * 0.2) {
          newIndex =
            dx > 0
              ? Math.max(activeIndex - 1, 0)
              : Math.min(activeIndex + 1, images.length - 1);
        }

        navigateToImage(newIndex);
      },
    }),
  ).current;

  const navigateToImage = index => {
    // Animate main image
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

    // Scroll main images
    swiperScrollRef.current?.scrollTo({
      x: index * SCREEN_WIDTH,
      animated: true,
    });

    // Update active index
    setActiveIndex(index);

    // Scroll thumbnails if necessary
    const thumbnailScrollPosition = Math.max(
      0,
      Math.min(
        (index - 2) * (thumbnailSize + THUMBNAIL_SPACING * 2),
        (images.length - VISIBLE_THUMBNAILS) *
          (thumbnailSize + THUMBNAIL_SPACING * 2),
      ),
    );

    thumbnailScrollRef.current?.scrollTo({
      x: thumbnailScrollPosition,
      animated: true,
    });
  };

  const handleThumbnailPress = index => {
    // Animate thumbnail
    Animated.sequence([
      Animated.timing(thumbnailScale, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(thumbnailScale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

    navigateToImage(index);
  };

  return (
    <Box>
      {/* Main Image Swiper */}
      <ScrollView
        ref={swiperScrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={e => {
          const index = Math.round(
            e.nativeEvent.contentOffset.x / SCREEN_WIDTH,
          );
          setActiveIndex(index);
        }}
        scrollEventThrottle={16}
        // scrollEnabled={!isDragging}
      >
        {images.map((image, index) => (
          <Animated.View
            key={index}
            style={{
              width: SCREEN_WIDTH,
              transform: [
                {
                  scale: activeIndex === index ? scale : 1,
                },
              ],
            }}
            {...panResponder.panHandlers} // Moved here
          >
            <Image
              source={image}
              alt={`Image ${index + 1}`}
              resizeMode="cover"
              className={` height-${height} width-${SCREEN_WIDTH - 25} borderRadius-${moderateScale(16)} `} />
          </Animated.View>
        ))}
      </ScrollView>
      {/* Thumbnails */}
      <Box className="items-center mt-4">
        <ScrollView
          ref={thumbnailScrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{width: thumbnailSectionWidth}}
          contentContainerStyle={{paddingHorizontal: THUMBNAIL_SPACING}}>
          <HStack space="sm" className="items-center justify-center">
            {images.map((image, index) => (
              <Pressable
                key={index}
                onPress={() => handleThumbnailPress(index)}>
                <Animated.View
                  style={{
                    transform: [
                      {
                        scale: activeIndex === index ? thumbnailScale : 1,
                      },
                    ],
                  }}>
                  <Box
                    className={` ${activeIndex === index ? activeColor : inactiveColor} border-[2px] rounded-sm p-0.5 `}>
                    <Image
                      source={image}
                      alt={`Thumbnail ${index + 1}`}
                      className={` height-${thumbnailSize} width-${thumbnailSize} rounded-sm `} />
                  </Box>
                </Animated.View>
              </Pressable>
            ))}
          </HStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default ImageSwiper;
