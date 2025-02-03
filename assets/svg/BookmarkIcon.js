import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = ({color, props}) => (
  <Svg
    width="20"
    height="20"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0 12.7847V6.16602C0 3.25933 0 1.80599 1.02513 0.902993C2.05025 0 3.70017 0 7 0C10.2998 0 11.9497 0 12.9749 0.902993C14 1.80599 14 3.25933 14 6.16602V12.7847C14 14.6293 14 15.5517 13.3238 15.8818C12.0142 16.5212 9.5578 14.3882 8.39125 13.7459C7.7147 13.3735 7.37642 13.1872 7 13.1872C6.62358 13.1872 6.2853 13.3735 5.60875 13.7459C4.4422 14.3882 1.98579 16.5212 0.676241 15.8818C0 15.5517 0 14.6293 0 12.7847Z"
      fill={'#4D4D4D'}
    />
  </Svg>
);
export {SvgComponent as BookmarkIcon};
