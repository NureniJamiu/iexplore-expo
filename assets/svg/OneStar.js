/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    width="76"
    height="13"
    viewBox="0 0 76 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx="6" cy="6.5" r="6" fill={props.color || '#999999'} />
    <Circle cx="22" cy="6.5" r="6" stroke={props.color || '#999999'} />
    <Circle cx="38" cy="6.5" r="6" stroke={props.color || '#999999'} />
    <Circle cx="54" cy="6.5" r="6" stroke={props.color || '#999999'} />
    <Circle cx="70" cy="6.5" r="5.5" stroke={props.color || '#999999'} />
  </Svg>
);
export {SvgComponent as OneStar};
