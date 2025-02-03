import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";
import { HStack } from "@/components/ui/hstack";
import { Button, ButtonIcon } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ListFilterIcon} from 'lucide-react-native';
import CustomInput from '../inputs/CustomInput';
import {verticalScale} from 'react-native-size-matters';

const SearchFilterPanel = ({openBottomSheet}) => {
  const navigation = useNavigation();
  return (
    <Box className="w-[100%] bg-secondary">
      <Text className="text-sm text-textSecondary text-center">
        Claim drinks waiting for you now!
      </Text>
      <HStack className="px-12 py-3 w-[100%] gap-20 items-center justify-around">
        <CustomInput
          placeholder="Search"
          w="100%"
          fontSize="$md"
          h={verticalScale(40)}
          borderRadius="$full"
          bgColor="$textTertiary"
        />
        <Button
          onPress={() => openBottomSheet(true)}
          className="bg-textTertiary rounded-lg">
          <ButtonIcon
            as={ListFilterIcon}
            className="text-backgroundLight-600"></ButtonIcon>
        </Button>
      </HStack>
    </Box>
  );
};

export default SearchFilterPanel;

const styles = StyleSheet.create({});
