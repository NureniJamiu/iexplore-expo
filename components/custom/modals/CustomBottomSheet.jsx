import { Box } from "@/components/ui/box";
/* eslint-disable prettier/prettier */
import BottomSheet, {SCREEN_HEIGHT, SCREEN_WIDTH} from '@gorhom/bottom-sheet';
import React, {useEffect, useRef} from 'react';
import {Keyboard, Pressable, StyleSheet, View} from 'react-native';

const CustoBottomSheet = ({
  openModal,
  closeModal = () => {},
  modalSnapPoints = ['25%', '50%'],
  headerComponent,
  backdropColor = 'rgba(0, 0, 0, 0.5)',
  swipeToClose = true,
  children,
}) => {
  const bottomSheetRef = useRef(null);

  useEffect(() => {
    if (openModal) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
      closeModal();
    }
  }, [closeModal, openModal]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={openModal ? 0 : -1}
      snapPoints={modalSnapPoints}
      backdropComponent={() =>
        openModal ? (
          <Pressable
            style={[styles.backdrop, {backgroundColor: backdropColor}]}
            onPress={() => {
              closeModal();
              Keyboard.dismiss(); // Hide the keyboard
            }}
          />
        ) : null
      }
      onClose={() => {
        closeModal();
      }}
      backgroundStyle={styles.background}
      keyboardBehavior="interactive"
      enablePanDownToClose={swipeToClose}>
      <View style={{backgroundColor: '#000000', padding: 16}}>
        <Box>{headerComponent}</Box>
        {children}
      </View>
    </BottomSheet>
  );
};

export default CustoBottomSheet;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    opacity: 0.8,
    backgroundColor: '#333',
    position: 'absolute',
    left: 0,
    top: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  background: {
    flex: 1,
    backgroundColor: '#000000',
    color: '#ffffff',
  },
});
