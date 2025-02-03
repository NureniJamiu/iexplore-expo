/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      id="Vector"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 14.5C14.206 14.5 16 12.706 16 10.5C16 8.294 14.206 6.5 12 6.5C9.794 6.5 8 8.294 8 10.5C8 12.706 9.794 14.5 12 14.5ZM12 8.5C13.103 8.5 14 9.397 14 10.5C14 11.603 13.103 12.5 12 12.5C10.897 12.5 10 11.603 10 10.5C10 9.397 10.897 8.5 12 8.5Z"
      fill={props.color || '#000000'}
    />
    <Path
      id="Vector"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.4201 22.314C11.5893 22.4349 11.7921 22.4998 12.0001 22.4998C12.2081 22.4998 12.4108 22.4349 12.5801 22.314C12.8841 22.099 20.0291 16.94 20.0001 10.5C20.0001 6.089 16.4111 2.5 12.0001 2.5C7.58909 2.5 4.00009 6.089 4.00009 10.495C3.97109 16.94 11.1161 22.099 11.4201 22.314ZM12.0001 4.5C15.3091 4.5 18.0001 7.191 18.0001 10.505C18.0211 14.943 13.6121 18.928 12.0001 20.235C10.3891 18.927 5.97909 14.941 6.00009 10.5C6.00009 7.191 8.69109 4.5 12.0001 4.5Z"
      fill={props.color || '#000000'}
    />
  </Svg>
);
export {SvgComponent as LocationIcon};
