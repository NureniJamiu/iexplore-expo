import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { ClockIcon, Icon } from "@/components/ui/icon";
import { Button, ButtonText, ButtonGroup } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navigation/screenNames';
import FlatButton from '../buttons/FlatButton';
import {MapPinIcon} from 'lucide-react-native';

const ClaimDrinkAtCard = ({openSheet}) => {
  const navigation = useNavigation();

  return (
    <Box
      className={` borderRadius-${moderateScale(12)} bg-secondary py-4 overflow-hidden `}>
      <Box className="px-8">
        <HStack className="justify-between items-center">
          <Text className="text-sm text-textSecondary font-normal">
            Sailors Lounge
          </Text>
          <FlatButton
            fontSize="$sm"
            title="Free"
            width="45"
            height={25}
            borderRadius="$lg"
          />
        </HStack>
        <VStack className="gap-2 my-1">
          <HStack className="gap-3">
            <Icon as={ClockIcon} className="text-textPrimary" />
            <Text className="text-sm text-textPrimary">
              7:00pm - 4:00am
            </Text>
          </HStack>
          <HStack className="gap-3">
            <Icon as={MapPinIcon} className="text-textPrimary" />
            <Text className="text-sm text-textPrimary">
              Admirality road, Lekki phase 1
            </Text>
          </HStack>
        </VStack>
        <ButtonGroup className="justify-between items-center mt-4 gap-3">
          <Button
            onPress={() => navigation.navigate(SCREENS.drinks.map)}
            className="flex-1 bg-textDark-900 border-2 border-textPrimary rounded-xl w-full">
            <ButtonText className="text-sm">Get Direction</ButtonText>
          </Button>
          <Button
            action="secondary"
            onPress={() => openSheet(true)}
            className="flex-1 rounded-xl bg-textPrimary w-full">
            <ButtonText className="text-sm text-textDark-900">
              Claim here
            </ButtonText>
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default ClaimDrinkAtCard;

const styles = StyleSheet.create({
  image: {
    height: verticalScale(100),
    width: '100%',
  },
});
