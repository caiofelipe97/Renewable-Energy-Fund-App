import NegativeChart from './Charts/NegativeChart';
import PositiveChart from './Charts/PositiveChart';
import { SvgProps } from 'react-native-svg';

interface ChartProps extends SvgProps {
  variation: number;
}

const Chart: React.FC<ChartProps> = ({ variation, ...props }) => {
  if (variation >= 0) {
    return <PositiveChart {...props} />;
  } else if (variation < 0) {
    return <NegativeChart {...props} />;
  }
};

export default Chart;
