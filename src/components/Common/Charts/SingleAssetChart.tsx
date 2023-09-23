import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SingleAssetChart: React.FC<SvgProps> = props => (
  <Svg width={375} height={155} fill="none" {...props}>
    <Path
      stroke="#0FDF8F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m-1 88.76 13.21-17.068 26.213 14.242L51.32 88l12.82 66 13.065-9.804 12.378-78.258 25.271 14.796 13.753-68.503 12.894 18.674 13.066 27.417 13.065 13.37 13.066-48.053L193.591 1l25.615 11.23L231.412 1l13.581 85.744 12.034 16.222 13.41-96.083 11.862 16.756 14.784 5.17 24.928-12.122 13.368 92.063h13.355l12.994-77.845L374 23.64"
    />
  </Svg>
);

export default SingleAssetChart;
