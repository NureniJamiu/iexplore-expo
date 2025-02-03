import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
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
      <Box className="flex-1 bg-background">
        <AuthHeader />
        <Box className="my-12">
          <Text className="text-textSecondary text-center text-2xl font-semibold leading-8">
            Forgot Password?
          </Text>
          <Text className="mx-16 mt-2 text-textPrimary text-sm text-center font-semibold leading-md">
            Please enter the email associated with your account
          </Text>
        </Box>
        <Box className="px-4">
          <CustomInput
            keyboardType="email-address"
            label="Email"
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
          />
          <Box className="mt-16">
            <FlatButton
              title={loading ? "Sending..." : "Send Code"}
              onPress={formik.handleSubmit}
              disabled={loading}
            />
          </Box>
        </Box>
        <HStack className="justify-center mt-24">
          <Text className="text-textPrimary">Remember password?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREENS.auth.login)}
          >
            <Text className="ml-2 text-textSecondary underline font-semibold">
              Login
            </Text>
          </TouchableOpacity>
        </HStack>
      </Box>
    </SafePageContainer>
  );
}
