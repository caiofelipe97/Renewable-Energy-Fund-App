import Svg, { Path, SvgProps } from 'react-native-svg';
import theme from '../../../theme';

const CoinIcon: React.FC<SvgProps> = props => (
  <Svg width={14} height={14} fill="none" {...props}>
    <Path
      fill={theme.colors.primary}
      d="M7 2.333c3.544 0 6.417 1.567 6.417 3.5v2.334c0 1.933-2.873 3.5-6.417 3.5-3.48 0-6.314-1.512-6.414-3.397l-.003-.103V5.833c0-1.933 2.873-3.5 6.417-3.5Zm0 7c-2.17 0-4.09-.587-5.25-1.487v.32C1.75 9.265 4.015 10.5 7 10.5c2.923 0 5.155-1.184 5.247-2.265l.003-.068v-.321c-1.16.9-3.08 1.487-5.25 1.487ZM7 3.5c-2.985 0-5.25 1.235-5.25 2.333S4.015 8.167 7 8.167s5.25-1.236 5.25-2.334S9.985 3.5 7 3.5Z"
    />
  </Svg>
);
export default CoinIcon;
