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
      d="M8 11C8 10.4696 8.21071 9.96086 8.58579 9.58579C8.96086 9.21071 9.46957 9 10 9H18C18.5304 9 19.0391 9.21071 19.4142 9.58579C19.7893 9.96086 20 10.4696 20 11V11.894L23.255 10.063C23.331 10.0203 23.4169 9.99816 23.5041 9.99888C23.5913 9.99959 23.6768 10.0231 23.7521 10.0671C23.8274 10.111 23.8899 10.174 23.9334 10.2495C23.9769 10.3251 23.9999 10.4108 24 10.498V17.5C23.9999 17.5874 23.977 17.6732 23.9335 17.7489C23.8899 17.8246 23.8273 17.8876 23.7519 17.9316C23.6764 17.9756 23.5907 17.9991 23.5034 17.9997C23.416 18.0003 23.33 17.978 23.254 17.935L20 16.1V17C20 17.5304 19.7893 18.0391 19.4142 18.4142C19.0391 18.7893 18.5304 19 18 19H16V20C16 21.0609 15.5786 22.0783 14.8284 22.8284C14.0783 23.5786 13.0609 24 12 24H9.5C9.36739 24 9.24021 23.9473 9.14645 23.8536C9.05268 23.7598 9 23.6326 9 23.5V21.5C9 21.3674 9.05268 21.2402 9.14645 21.1464C9.24021 21.0527 9.36739 21 9.5 21H11.5C11.8978 21 12.2794 20.842 12.5607 20.5607C12.842 20.2794 13 19.8978 13 19.5V19H10C9.46957 19 8.96086 18.7893 8.58579 18.4142C8.21071 18.0391 8 17.5304 8 17V11ZM14 19V19.5C14 20.163 13.7366 20.7989 13.2678 21.2678C12.7989 21.7366 12.163 22 11.5 22H10V23H12C12.7956 23 13.5587 22.6839 14.1213 22.1213C14.6839 21.5587 15 20.7956 15 20V19H14ZM10 18H18C18.2652 18 18.5196 17.8946 18.7071 17.7071C18.8946 17.5196 19 17.2652 19 17V11C19 10.7348 18.8946 10.4804 18.7071 10.2929C18.5196 10.1054 18.2652 10 18 10H10C9.73478 10 9.48043 10.1054 9.29289 10.2929C9.10536 10.4804 9 10.7348 9 11V17C9 17.2652 9.10536 17.5196 9.29289 17.7071C9.48043 17.8946 9.73478 18 10 18ZM20.005 13.04V14.954L23 16.644V11.354L20.005 13.04Z"
      fill="#212121"
    />
  </Svg>
);
export {SvgComponent as Security};
