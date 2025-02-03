import { StatusBar } from "@/components/ui/status-bar";
import { Box } from "@/components/ui/box";
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const SafePageContainer = ({
  children,
  containerStyle,
  background = '#212121',
}) => {
  return (
    <SafeAreaView
      edges={['top']}
      style={{
        ...containerStyle,
        flex: 1,
        backgroundColor: background,
      }}>
      <StatusBar animated={true} barStyle={'light-content'} />
      {/* ======CHILDREN===== */}
      <Box className="flex-1">{children}</Box>
    </SafeAreaView>
  );
};

export default SafePageContainer;
