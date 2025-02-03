import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import { Avatar } from "@/components/ui/avatar";
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import FlatButton from '../buttons/FlatButton';

const SpotOfTheWeekCard = () => {
  return (
    <Box
      className={` borderRadius-${moderateScale(16)} my-2 p-4 bg-inputBackground relative `}>
      <VStack>
        <HStack className="w-full">
          <VStack className="w-[73%] relative">
            <Box
              className={` borderRadius-${moderateScale(50)} bg-primary absolute top-0 left-0 `}>
              <Text className="px-3 py-0.5 text-xs font-bold">
                #1 Spot
              </Text>
            </Box>
            <Text
              className={` lineHeight-${scale(25)} fontSize-${moderateScale(18)} mt-9 text-textPrimary font-[700] `}>
              The place nightclub and rooftop lounge
            </Text>
          </VStack>
          <Box>
            <Avatar
              size="xl"
              className={` borderRadius-${moderateScale(8)} bg-textDark-500 `} />
          </Box>
        </HStack>
        <Box className="mt-5">
          <Text
            className={` lineHeight-${scale(20)} fontSize-${moderateScale(14)} text-textPrimary `}>
            TPNRL is the number one spot of the week for its vibrant atmosphere,
            excellent service, and standout experiences, making it a top choice
            for both locals and visitors seeking a great night out.
          </Text>
        </Box>
        <Box className="mt-3">
          <FlatButton title="Spot details" h={verticalScale(35)} />
        </Box>
      </VStack>
    </Box>
  );
};

export default SpotOfTheWeekCard;
