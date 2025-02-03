import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <G id="arrow-left">
      <G id="Arrows Button Left">
        <Path
          id="Vector"
          d="M19.9999 8C19.9999 8 12 13.8919 12 16.0001C12 18.1082 20 24 20 24"
          stroke="#F6F6F6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </G>
  </Svg>
);
export {SvgComponent as BackIcon};
