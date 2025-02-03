import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <G id="&#240;&#159;&#166;&#134; icon &#34;message text&#34;">
      <G id="Group">
        <Path
          id="Vector"
          d="M7.2 0L16.8 0C21.6 0 24 2.4 24 7.2V22.8C24 23.46 23.46 24 22.8 24H7.2C2.4 24 0 21.6 0 16.8V7.2C0 2.4 2.4 0 7.2 0Z"
          fill="#F6F6F6"
        />
        <G id="Group_2">
          <G id="Vector_2">
            <Path d="M18 9H6H18Z" fill="#F6F6F6" />
            <Path
              d="M18 9H6"
              stroke="#0E0E0E"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>
          <G id="Vector_3">
            <Path d="M18 15H9.6H18Z" fill="#F6F6F6" />
            <Path
              d="M18 15H9.6"
              stroke="#0E0E0E"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
);
export {SvgComponent as CommentIcon};
