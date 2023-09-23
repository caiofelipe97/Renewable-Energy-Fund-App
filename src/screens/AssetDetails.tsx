import { StyleSheet, ScrollView } from 'react-native';
import { ScreenProps } from '../navigation/AppNavigator';
import theme from '../theme';
import { percentageToPixels } from '../utils/percentageToPixels';
import { RouteProp, useRoute } from '@react-navigation/native';
import { AssetDetailsParams } from '../navigation/stacks/HomeStackNavigator';
import AssetChart from '../components/Screens/AssetDetails/AssetChart';
import AsssetInfo from '../components/Screens/AssetDetails/AsssetInfo';
import FundBreakdownSection from '../components/Screens/AssetDetails/FundBreakdownSection';
import ManageAsset from '../components/Screens/AssetDetails/ManageAsset';

interface AssetDetailsProps extends ScreenProps<'AssetDetails'> {}

const AssetDetails: React.FC<AssetDetailsProps> = () => {
  const route =
    useRoute<RouteProp<Record<string, AssetDetailsParams>, string>>();
  const { asset } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AssetChart asset={asset} />
      <AsssetInfo />
      <FundBreakdownSection />
      <ManageAsset />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    paddingVertical: theme.padding.default,
    gap: percentageToPixels(2.5, 'height'),
  },
});

export default AssetDetails;
