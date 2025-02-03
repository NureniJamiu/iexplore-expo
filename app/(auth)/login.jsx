import React from "react";
import { Box, HStack, Text } from "@gluestack-ui/themed";
import { useFormik } from "formik";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import FlatButton from "@/components/custom/buttons/FlatButton";
import CustomFormBox from "@/components/custom/containers/CustomFormBox";
import SafePageContainer from "@/components/custom/containers/SafePageContainer";
import CustomInput from "@/components/custom/inputs/CustomInput";
import { loginSchema } from "@/schema/authSchemas";
import { setError, setLoading } from "@/redux/auth/authSlice";
import GlobalHeader from "@/components/custom/headers/GlobalHeader";
import { signIn } from "@/redux/auth/authActions";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, error } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      username_or_email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      dispatch(setLoading(true));

      try {
        const response = await dispatch(signIn(values)).unwrap();
        // console.log('LOGIN UI RESPOSED', response):
        if (response.code === "200") {
          router.replace("/(tabs)");
        }
      } catch (err) {
        console.log("Login error:", err);
        dispatch(setError(err));
      } finally {
        dispatch(setLoading(false));
      }
    },
  });

  return (
    <SafePageContainer>
      <Box bg="$background" flex={1} pt="$2">
        <GlobalHeader />
        <Box marginVertical="$5">
          <Text
            color="$textSecondary"
            fontSize={moderateScale(24)}
            textAlign="center"
            fontWeight="$semibold"
            lineHeight="$2xl"
          >
            Login
          </Text>
        </Box>
        <CustomFormBox h={verticalScale(400)} ph={scale(16)}>
          <CustomInput
            keyboardType="email-address"
            label="Username or Email"
            onChangeText={formik.handleChange("username_or_email")}
            onBlur={formik.handleBlur("username_or_email")}
            value={formik.values.username_or_email}
            error={
              formik.touched.username_or_email &&
              formik.errors.username_or_email
            }
          />
          <CustomInput
            type="password"
            label="Password"
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
          />
          <Box mt={0} justifyContent="flex-end" alignItems="flex-end">
            <TouchableOpacity
              onPress={() => router.replace("/(auth)/forgot-password")}
            >
              <Text color="$textPrimary">Forgot password</Text>
            </TouchableOpacity>
          </Box>

          <Box mt="$64">
            <FlatButton
              isLoading={loading}
              disabled={loading || !formik.isValid}
              title={loading ? "Logging in" : "Login"}
              onPress={formik.handleSubmit}
            />
          </Box>
        </CustomFormBox>

        <HStack justifyContent="center" mt="$24">
          <Text color="$textPrimary">Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.replace("/(auth)/signup")}>
            <Text
              ml={scale(8)}
              textDecorationLine="underline"
              fontWeight="600"
              color="$textSecondary"
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </HStack>
      </Box>
    </SafePageContainer>
  );
}
