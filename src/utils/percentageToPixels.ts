import { Dimensions } from 'react-native';

// Function to convert percentage to pixels
export const percentageToPixels = (percentage: number, dimension = 'width') => {
  const { width, height } = Dimensions.get('window');
  const baseDimension = dimension === 'width' ? width : height;
  return (percentage / 100) * baseDimension;
};
