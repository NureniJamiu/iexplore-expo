import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Divider } from "@/components/ui/divider";
import { Box } from "@/components/ui/box";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {Image, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import { moderateScale } from 'react-native-size-matters';

const ClubQuestionsAndAnswers = ({modalState}) => {
  // const [modalState, setModalState] = ();
  return (
    <Box className="my-[25px] px-4">
      <HStack className="items-center my-2 justify-between">
        <HStack space="lg" className="items-center">
          <Avatar size="md">
            <AvatarImage
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF22pWQobEP7jY3xgI1GTL1LtZst_rKJWayw&usqp=CAU',
              }}
              alt="Avatar"
            />
          </Avatar>
          <VStack>
            <Text className="text-coolGray-200 font-bold text-md">
              Max Smith
            </Text>
            <Text className={` fontSize-${moderateScale(12)} text-textGrey `}>
              12 Sept 2023
            </Text>
          </VStack>
        </HStack>
        <Text className="w-[85px] text-sm text-textGrey self-start text-right">
          21 answers contributed
        </Text>
      </HStack>
      <Text className={` fontSize-${moderateScale(14)} text-coolGray-200 `}>
        For guys who have been there a lot what is the price range for having a
        good time here? is it for rich folks or can a average joe have a nice
        time there also?
      </Text>
      <Box className="my-3 flex-row items-center justify-between">
        <Button
          size="md"
          action="primary"
          onPress={() => modalState(true)}
          className="bg-background border-primary border rounded-2xl">
          <ButtonText className="text-textSecondary">Answer question</ButtonText>
        </Button>
        <Text underline className="text-textSecondary">
          Read all answers
        </Text>
      </Box>
    </Box>
  );
};

export default ClubQuestionsAndAnswers;

const styles = StyleSheet.create({});
