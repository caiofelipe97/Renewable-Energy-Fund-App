import Svg, { Path, SvgProps } from 'react-native-svg';

const SolarFundIcon: React.FC<SvgProps> = props => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill="#F0A719"
      d="M7.5 1.5V4h1V1.5h-1ZM3.75 3.047l-.703.703 1.765 1.781.72-.718L3.75 3.046Zm8.5 0-1.781 1.765.719.72 1.765-1.782-.703-.703ZM8 4.5A3.507 3.507 0 0 0 4.5 8c0 1.928 1.572 3.5 3.5 3.5s3.5-1.572 3.5-3.5S9.928 4.5 8 4.5Zm0 1c1.387 0 2.5 1.113 2.5 2.5S9.387 10.5 8 10.5A2.492 2.492 0 0 1 5.5 8c0-1.387 1.113-2.5 2.5-2.5Zm-6.5 2v1H4v-1H1.5Zm10.5 0v1h2.5v-1H12Zm-7.188 2.969L3.048 12.25l.703.703 1.781-1.765-.718-.72Zm6.375 0-.718.719 1.781 1.765.703-.703-1.765-1.781ZM7.5 12v2.5h1V12h-1Z"
    />
  </Svg>
);
export default SolarFundIcon;
