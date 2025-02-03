import { Box, HStack, Text } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
import { apiPost } from "@/lib/api/api-service";
import { url } from "@/lib/api/url";
import FlatButton from "@/components/custom/buttons/FlatButton";
import SafePageContainer from "@/components/custom/containers/SafePageContainer";
import AuthHeader from "@/components/custom/headers/AuthHeader";
import CustomInput from "@/components/custom/inputs/CustomInput";
import { forgotPassSchema } from "@/schema/authSchemas";

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPassSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const response = await apiPost(url.requestOtpForForgotPassword, {
          email: values.email,
        });

        if (response.status === "success") {
          Alert.alert("Success", "OTP sent successfully to your email!");
          navigation.navigate(SCREENS.auth.checkInbox, {
            email: values.email,
          });
        } else {
          Alert.alert("Error", response.message || "Failed to send OTP");
        }
      } catch (error) {
        // Handle network or other unexpected errors
        Alert.alert(
          "Error",
          "An error occurred while sending OTP. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <SafePageContainer>
      <Box flex={1} bg="$background">
        <AuthHeader />
        <Box marginVertical={"$12"}>
          <Text
            color="$textSecondary"
            fontSize={moderateScale(32)}
            textAlign="center"
            fontWeight="$semibold"
            lineHeight={"$2xl"}
          >
            Forgot Password?
          </Text>
          <Text
            mx={"$16"}
            mt={"$2"}
            color="$textPrimary"
            fontSize={moderateScale(15)}
            textAlign="center"
            fontWeight="$semibold"
            lineHeight={"$md"}
          >
            Please enter the email associated with your account
          </Text>
        </Box>
        <Box px={"$4"}>
          <CustomInput
            keyboardType="email-address"
            label="Email"
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
          />
          <Box mt={"$16"}>
            <FlatButton
              title={loading ? "Sending..." : "Send Code"}
              onPress={formik.handleSubmit}
              disabled={loading}
            />
          </Box>
        </Box>
        <HStack justifyContent="center" mt={"$24"}>
          <Text color="$textPrimary">Remember password?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREENS.auth.login)}
          >
            <Text
              ml={scale(8)}
              textDecorationLine="underline"
              fontWeight="600"
              color="$textSecondary"
            >
              Login
            </Text>
          </TouchableOpacity>
        </HStack>
      </Box>
    </SafePageContainer>
  );
}
