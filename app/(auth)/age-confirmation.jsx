import moment from "moment";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import FlatButton from "@/components/custom/buttons/FlatButton";
import SafePageContainer from "@/components/custom/containers/SafePageContainer";
import GlobalHeader from "@/components/custom/headers/GlobalHeader";
import { formatDate } from "@/components/custom/inputs/CustomDateAgePicker";
import { useDispatch } from "react-redux";
import { signUp } from "@/redux/auth/authActions";

export default function AgeConfirmationScreen({ route }) {
  const dispatch = useDispatch();
  const { values } = route?.params;
  const { age, email, password } = values;
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    const formattedDate = formatDateToISO(values.date_of_birth);
    console.log("FORMATTED DATE:", formattedDate);

    if (age < 18) {
      return alert("You must be 18 years or older to sign up.");
    }

    try {
      setIsLoading(true);
      const transformedValues = {
        ...values,
        date_of_birth: moment(values.date_of_birth).format("YYYY-MM-DD"),
        role: "user",
      };

      console.log(
        "Transformed Values (payload):",
        JSON.stringify(transformedValues, null, 2)
      );

      await dispatch(signUp(transformedValues)).unwrap();
      navigation.navigate(SCREENS.auth.confirmOTP, {
        email: transformedValues.email,
        values: transformedValues,
      });
    } catch (err) {
      console.log(
        "Error during form submission:",
        JSON.stringify(err, null, 2)
      );
      let errorMessage = "An unknown error occurred. Please try again.";

      if (err?.response?.data) {
        const errorData = err.response.data;
        errorMessage =
          typeof errorData === "object"
            ? JSON.stringify(errorData, null, 2)
            : errorData;
      } else if (err?.message) {
        errorMessage = err.message;
      }
      alert(`Error: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafePageContainer>
      <Box className="flex-1 bg-background pt-2">
        <GlobalHeader />
        <Box className="my-5">
          <Text className="text-textSecondary text-[24px] text-center font-semibold leading-[32px]">
            Confirm age
          </Text>
        </Box>
        <Box className="flex items-center justify-center">
          <Box className="my-[36px] mx-[16px] border border-primary flex items-center justify-center w-[170px] h-[170px] rounded-full p-2">
            <Box className="bg-inputBackground w-full h-full flex items-center justify-center rounded-full border border-background">
              <Text className="text-textPrimary text-7xl leading-[64px] font-semibold">
                {age}
              </Text>
              <Text className="text-textPrimary"> years old</Text>
            </Box>
          </Box>
        </Box>
        <Text className="text-gray-400 text-center text-sm my-2">
          {formatDate(values?.date_of_birth)}
        </Text>
        <Text className="text-textPrimary text-[16px] text-center leading-6 mx-[50px] my-4">
          As part of our commitment to responsible drinking, please confirm your
          age displayed above is correct and you are of legal drinking age.
        </Text>
        <Box className="px-[44px] mt-16">
          <FlatButton
            title="Yes I confirm"
            onPress={handleSignUp}
            isLoading={isLoading}
          />
        </Box>
      </Box>
    </SafePageContainer>
  );
}

const styles = StyleSheet.create({});

function formatDateToISO(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}
