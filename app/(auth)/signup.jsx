import React, { useEffect, useState } from "react";
import moment from "moment";
import { Box } from "@/components/ui/box";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
} from "@/components/ui/checkbox";
import { CheckIcon } from "@/components/ui/checkIcon";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { useFormik } from "formik";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { scale } from "react-native-size-matters";

import FlatButton from "@/components/custom/buttons/FlatButton";
import CustomFormBox from "@/components/custom/containers/CustomFormBox";
import SafePageContainer from "@/components/custom/containers/SafePageContainer";
import GlobalHeader from "@/components/custom/headers/GlobalHeader";
import CustomDateAgePicker from "@/components/custom/inputs/CustomDateAgePicker";
import CustomInput from "@/components/custom/inputs/CustomInput";
import CustomSelect from "@/components/custom/inputs/CustomSelect";
import { signUpValidationSchema } from "@/schema/authSchemas";
import { clearError } from "@/redux/auth/authSlice";

export default function SignUpScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(clearError());
    return () => dispatch(clearError());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      username: "",
      gender: "",
      email: "",
      age: "",
      date_of_birth: "",
      phone: "",
      referral_code: "",
      password: "",
      confirm_password: "",
      termsAccepted: false,
    },
    validationSchema: signUpValidationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const formattedValues = {
          ...values,
          date_of_birth: moment(values.date_of_birth).format("YYYY-MM-DD"),
        };
        console.log("Form captured with values:", formattedValues);

        navigation.navigate(SCREENS.auth.ageConfirmation, {
          values: formattedValues,
        });
      } catch (err) {
        console.log(
          "Error with user input. Make sure you're entering the correct information:",
          err
        );
      } finally {
        setIsLoading(false);
      }
    },
    enableReinitialize: true,
  });

  return (
    <SafePageContainer>
      <Box flex={1} className="bg-background pt-2">
        <GlobalHeader />
        <Box className="my-4">
          <Text className="text-secondary font-semibold text-center text-xl leading-8">
            Sign up
          </Text>
        </Box>
        <CustomFormBox ph={scale(16)} scroll>
          <CustomInput
            type="text"
            label="First name"
            onChangeText={formik.handleChange("first_name")}
            onBlur={formik.handleBlur("first_name")}
            value={formik.values.first_name}
            error={formik.touched.first_name && formik.errors.first_name}
          />
          <CustomInput
            type="text"
            label="Last name"
            onChangeText={formik.handleChange("last_name")}
            onBlur={formik.handleBlur("last_name")}
            value={formik.values.last_name}
            error={formik.touched.last_name && formik.errors.last_name}
          />
          <CustomInput
            type="text"
            label="Username"
            onChangeText={formik.handleChange("username")}
            onBlur={formik.handleBlur("username")}
            value={formik.values.username}
            error={formik.touched.username && formik.errors.username}
            keyboardType="default"
          />
          <CustomSelect
            label="Gender"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
            onValueChange={formik.handleChange("gender")}
            value={formik.values.gender}
            error={formik.touched.gender && formik.errors.gender}
          />
          <CustomInput
            type="text"
            label="Email address"
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            keyboardType="email-address"
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
          />
          <CustomDateAgePicker
            setUserAge={(age) => {
              formik.setFieldValue("age", age);
            }}
            setDate={(date_of_birth) => {
              formik.setFieldValue("date_of_birth", date_of_birth);
            }}
            error={formik.touched.age && formik.errors.age}
          />
          <CustomInput
            type="text"
            label="Phone number"
            onChangeText={formik.handleChange("phone")}
            onBlur={formik.handleBlur("phone")}
            keyboardType="phone-pad"
            value={formik.values.phone}
            error={formik.touched.phone && formik.errors.phone}
          />
          <CustomInput
            type="text"
            label="Referral Id"
            onChangeText={formik.handleChange("referral_code")}
            onBlur={formik.handleBlur("referral_code")}
            value={formik.values.referral_code}
            error={formik.touched.referral_code && formik.errors.referral_code}
          />
          <CustomInput
            type="password"
            label="Password"
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
            textContentType="oneTimeCode"
          />
          <CustomInput
            type="password"
            label="Confirm password"
            onChangeText={formik.handleChange("confirm_password")}
            onBlur={formik.handleBlur("confirm_password")}
            value={formik.values.confirm_password}
            error={
              formik.touched.confirm_password && formik.errors.confirm_password
            }
            textContentType="oneTimeCode"
          />
          <Box className="mb-16 mt-6">
            <Checkbox
              size="md"
              aria-label="check box"
              className="mb-5"
              onChange={(e) => formik.setFieldValue("termsAccepted", e)}
            >
              <CheckboxIndicator className="mr-2 bg-primary border-primary">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <Text className="flex-1 text-primary text-base">
                By creating an account, I accept the{" "}
                <Text className="text-secondary underline">
                  Terms of Service
                </Text>{" "}
                and
                <Text className="text-secondary underline">
                  {" "}
                  Privacy policy
                </Text>{" "}
                of iexplore.
              </Text>
            </Checkbox>
            <FlatButton title="Sign up" onPress={formik.handleSubmit} />
          </Box>
          <HStack className="justify-center mb-6">
            <Text className="text-primary">Already have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.auth.login)}
            >
              <Text className="ml-2 text-secondary font-semibold underline">
                Sign in
              </Text>
            </TouchableOpacity>
          </HStack>
        </CustomFormBox>
      </Box>
    </SafePageContainer>
  );
}
