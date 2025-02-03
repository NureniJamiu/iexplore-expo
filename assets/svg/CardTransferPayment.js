import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx="16" cy="16" r="16" fill="#FFD700" />
    <Path
      d="M8 15.5C8 12.4361 8 10.9037 8.9376 9.95225C9.8744 9 11.3832 9 14.4 9H17.6C20.6168 9 22.1256 9 23.0624 9.95225C24 10.9037 24 12.4361 24 15.5C24 18.5639 24 20.0963 23.0624 21.0477C22.1256 22 20.6168 22 17.6 22H14.4C11.3832 22 9.8744 22 8.9376 21.0477C8 20.0963 8 18.5639 8 15.5Z"
      stroke="#212121"
      stroke-width="1.5"
    />
    <Path
      d="M14.4 18.75H11.2M17.6 18.75H16.4M8 13.875H24"
      stroke="#212121"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </Svg>
);
export {SvgComponent as CardTransferPayment};
