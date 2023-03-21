import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.33332 3.33331H16.6667C17.5833 3.33331 18.3333 4.08331 18.3333 4.99998V15C18.3333 15.9166 17.5833 16.6666 16.6667 16.6666H3.33332C2.41666 16.6666 1.66666 15.9166 1.66666 15V4.99998C1.66666 4.08331 2.41666 3.33331 3.33332 3.33331Z"
      stroke="#A0A0A0"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.3333 5L9.99999 10.8333L1.66666 5"
      stroke="#A0A0A0"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
