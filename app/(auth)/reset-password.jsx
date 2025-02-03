import { useFormik } from "formik";
import React, { useState } from "react";
import { Box, Text } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { moderateScale, scale } from "react-native-size-matters";

import { url } from "@/lib/api/url";
import { apiPost } from "@/lib/api/api-service";
import { resetPasswordSchema } from "@/schema/authSchemas";
import AuthHeader from "@/components/custom/headers/AuthHeader";
import FlatButton from "@/components/custom/buttons/FlatButton";
import CustomInput from "@/components/custom/inputs/CustomInput";
import CustomFormBox from "@/components/custom/containers/CustomFormBox";
import SafePageContainer from "@/components/custom/containers/SafePageContainer";

export default function ResetPasswordScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      password: "",
      retypePassword: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values) => {
      console.log("Form submitted with values:", values);
      setLoading(true);
      try {
        const response = await apiPost(url.resetPassword, {
          new_password: values.password,
          confirm_new_password: values.retypePassword,
        });
        // console.log(response);
        navigation.navigate(SCREENS.auth.changedPassword);
      } catch (error) {
        console.log("Error resetting password:", error);
      } finally {
        setLoading(false);
      }
    },
    enableReinitialize: true,
  });
  return (
    <SafePageContainer>
      <AuthHeader />
      <Box marginVertical={"$12"}>
        <Text
          color="$textSecondary"
          fontSize={moderateScale(32)}
          textAlign="center"
          fontWeight="$semibold"
          lineHeight={"$2xl"}
        >
          Reset password
        </Text>
        <Text
          mx={"$20"}
          mt={"$2"}
          color="$textSecondary"
          fontSize={moderateScale(16)}
          textAlign="center"
          fontWeight="$semibold"
          lineHeight={"$md"}
        >
          Create a new password you’ll easily remember
        </Text>
      </Box>
      <CustomFormBox ph={scale(16)}>
        <CustomInput
          type="text"
          label="Password"
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password}
          secureTextEntry={true}
          textContentType="oneTimeCode"
        />
        <CustomInput
          type="text"
          label="Re-type password"
          onChangeText={formik.handleChange("retypePassword")}
          onBlur={formik.handleBlur("retypePassword")}
          value={formik.values.retypePassword}
          error={formik.touched.retypePassword && formik.errors.retypePassword}
          secureTextEntry={true}
          textContentType="oneTimeCode"
        />

        <Box mt="$10" px="$6">
          <FlatButton
            title={loading ? "Resetting..." : "Reset password"}
            onPress={formik.handleSubmit}
            disabled={loading}
          />
        </Box>
      </CustomFormBox>
    </SafePageContainer>
  );
}
