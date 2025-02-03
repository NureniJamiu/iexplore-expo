import {View, Keyboard, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const CustomFormBox = ({
  children,
  ph,
  pv,
  p,
  pt,
  pb,
  pl,
  pr,
  m,
  mt,
  mb,
  ml,
  mr,
  mv,
  mh,
  h,
  w,
  maxH,
  maxW,
  flexRow,
  justify,
  align,
  styles,
  scroll,
  bg,
  horizontal,
  radius,
  form = false,
  minH,
  minW,
}) => {
  const hideKeyboard = () => {
    Keyboard.dismiss();
  };
  return scroll ? (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        margin: m,
        padding: p,
        marginHorizontal: mh,
        marginVertical: mv,
        paddingHorizontal: ph,
        paddingVertical: pv,
        height: h,
        width: w,
        maxHeight: maxH,
        maxWidth: maxW,
        flexDirection: flexRow ? 'row' : 'column',
        justifyContent: justify,
        alignItems: align,
        paddingBottom: pb,
        paddingTop: pt,
        paddingLeft: pl,
        paddingRight: pr,
        marginBottom: mb,
        marginTop: mt,
        marginLeft: ml,
        marginRight: mr,
        backgroundColor: bg,
        borderRadius: radius,
        minHeight: minH,
        minWidth: minW,
        ...styles,
      }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      horizontal={horizontal}>
      {children}
    </KeyboardAwareScrollView>
  ) : (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View
        style={{
          margin: m,
          padding: p,
          marginHorizontal: mh,
          marginVertical: mv,
          paddingHorizontal: ph,
          paddingVertical: pv,
          height: h,
          width: w,
          maxHeight: maxH,
          maxWidth: maxW,
          flexDirection: flexRow ? 'row' : 'column',
          justifyContent: justify,
          alignItems: align,
          paddingBottom: pb,
          paddingTop: pt,
          paddingLeft: pl,
          paddingRight: pr,
          marginBottom: mb,
          marginTop: mt,
          marginLeft: ml,
          marginRight: mr,
          backgroundColor: bg,
          borderRadius: radius,
          minHeight: minH,
          minWidth: minW,
          ...styles,
        }}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CustomFormBox;
