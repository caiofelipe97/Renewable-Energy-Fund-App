import { percentageToPixels } from './utils/percentageToPixels';

const theme = {
  colors: {
    primary: '#770FDF',
    primaryLight: '#F7EFFF',

    green: '#0FDF8F',
    red: '#EE8688',

    black: '#000000',
    white: '#FFFFFF',
    grey100: '#F4F4F4',
    grey300: '#E6E6E6',
    grey500: '#CFCFCF',
    grey600: '#808080',
    grey700: '#A0A0A0',
  },
  fonts: {
    regular: 'Sora-Regular',
    medium: 'Sora-Medium',
    semiBold: 'Sora-SemiBold',
  },
  padding: {
    default: percentageToPixels(5.3),
  },
};

export default theme;
