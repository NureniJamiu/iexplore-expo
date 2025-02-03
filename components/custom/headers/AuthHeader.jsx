import { HStack } from "@/components/ui/hstack";
import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { moderateScale, verticalScale } from "react-native-size-matters";

const AuthHeader = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.goBack()}
      style={{ marginTop: verticalScale(10), backgroundColor: "#000000" }}
    >
      <HStack space="sm" className="items-center px-5">
        <AntDesign name="left" color="#FFFFFF" size={moderateScale(25)} />
      </HStack>
    </TouchableOpacity>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({});
