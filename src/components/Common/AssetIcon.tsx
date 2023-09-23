import { InvestmentFund } from '../../types/Asset';
import NaturalFundIcon from './Icons/NaturalFundIcon';
import SolarFundIcon from './Icons/SolarFundIcon';
import WindFundIcon from './Icons/WindFundIcon';
import { SvgProps } from 'react-native-svg';

interface AssetIconProps extends SvgProps {
  name: string;
}

const AssetIcon: React.FC<AssetIconProps> = ({ name, ...props }) => {
  if (name === InvestmentFund.NaturalFund) {
    return <NaturalFundIcon {...props} />;
  } else if (name === InvestmentFund.SolarFund) {
    return <SolarFundIcon {...props} />;
  } else if (name === InvestmentFund.WindFund) {
    return <WindFundIcon {...props} />;
  } else return null;
};

export default AssetIcon;
