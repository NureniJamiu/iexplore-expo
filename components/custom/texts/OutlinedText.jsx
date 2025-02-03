import { Heading } from "@/components/ui/heading";
import { Box } from "@/components/ui/box";
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

const OutlinedText = ({children, fontSize = 24, outlineWidth = 1, style}) => {
  const positions = [
    {top: -outlineWidth, left: 0},
    {top: outlineWidth, left: 0},
    {top: 0, left: -outlineWidth},
    {top: 0, left: outlineWidth},
    {top: -outlineWidth, left: -outlineWidth},
    {top: -outlineWidth, left: outlineWidth},
    {top: outlineWidth, left: -outlineWidth},
    {top: outlineWidth, left: outlineWidth},
  ];

  return (
    <Box style={style} className="relative">
      {positions.map((pos, index) => (
        <Heading
          key={index}
          style={{
            top: pos.top,
            left: pos.left,
          }}
          className={` lineHeight-${moderateScale(220)} fontSize-${fontSize} absolute text-[#FFC000] `}>
          {children}
        </Heading>
      ))}
      <Heading
        className={` fontSize-${fontSize} lineHeight-${moderateScale(220)} relative text-black z-1 `}>
        {children}
      </Heading>
    </Box>
  );
};

export default OutlinedText;
