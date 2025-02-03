import React from "react";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { useFormik } from "formik";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
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
      <Box className="bg-background flex-1 pt-2">
        <GlobalHeader />
        <Box className="my-5">
          <Text className="text-textSecondary text-center text-xl font-semibold leading-8">
            Login
          </Text>
        </Box>
        <CustomFormBox className="h-400 px-4">
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
          <Box className="mt-0 justify-end items-end">
            <TouchableOpacity
              onPress={() => router.replace("/(auth)/forgot-password")}
            >
              <Text className="text-textPrimary">Forgot password</Text>
            </TouchableOpacity>
          </Box>

          <Box className="mt-64">
            <FlatButton
              isLoading={loading}
              disabled={loading || !formik.isValid}
              title={loading ? "Logging in" : "Login"}
              onPress={formik.handleSubmit}
            />
          </Box>
        </CustomFormBox>

        <HStack className="justify-center mt-24">
          <Text className="text-textPrimary">Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.replace("/(auth)/signup")}>
            <Text className="ml-2 text-textSecondary underline font-semibold">
              Sign up
            </Text>
          </TouchableOpacity>
        </HStack>
      </Box>
    </SafePageContainer>
  );
}
