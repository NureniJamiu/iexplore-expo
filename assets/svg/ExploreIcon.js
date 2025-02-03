import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G id="navigation-02">
      <G id="elements">
        <Path
          id="Rectangle 2204"
          d="M16.2078 8.33055C17.1507 9.26482 15.6422 16.8628 14.0942 16.9967C12.7957 17.109 12.391 14.5478 12.1175 13.7361C11.8476 12.9349 11.5472 12.6465 10.7527 12.3836C8.73415 11.7159 7.72489 11.382 7.52507 10.8533C6.99595 9.45337 15.0036 7.13731 16.2078 8.33055Z"
          stroke={props.color || '#999999'}
          strokeWidth="1.5"
        />
        <Path
          id="Ellipse 1590"
          d="M22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2C18.0228 2 22.5 6.47715 22.5 12Z"
          stroke={props.color || '#999999'}
          strokeWidth="1.5"
        />
      </G>
    </G>
  </Svg>
);
export {SvgComponent as ExploreIcon};
