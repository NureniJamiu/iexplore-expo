import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { Avatar } from "@/components/ui/avatar";
import { StyleSheet} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const PreviousBlogCard = ({title, imageUrl, imageDescription}) => {
  const navigation = useNavigation();

  return (
    <Box>
      <Box>
        <HStack className="mt-4 gap-2.5 w-full">
          <Image
            source={{
              uri: `${imageUrl}`,
            }}
            alt="Blog image"
            className="rounded-xl"
          />
          <VStack className="flex-1 justify-around">
            <HStack className="justify-between items-center w-full">
              <Text className="font-bold text-textPrimary">
                {title}
              </Text>
              <Text className="text-sm">Oct 19, 2023</Text>
            </HStack>
            <HStack className="items-center gap-2">
              <Avatar size="sm" />
              <Text className="text-sm">iexplore weekly | 10 min read</Text>
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default PreviousBlogCard;

const styles = StyleSheet.create({});