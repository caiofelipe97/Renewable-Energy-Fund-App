import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../theme';
import { Asset } from '../../../types/Asset';
import AssetIcon from '../../Common/AssetIcon';
import { percentageToPixels } from '../../../utils/percentageToPixels';
import Chart from '../../Common/Chart';
import Variation from '../../Common/Variation';

interface FundCardProps {
  fund: Asset;
}

const FundCard: React.FC<FundCardProps> = ({ fund }) => {
  return (
    <View style={styles.fundContainer}>
      <View style={styles.fundCardHeader}>
        <AssetIcon name={fund.name} />
        <Text style={styles.fundName}>{fund.name}</Text>
      </View>

      <Chart variation={fund.variation} />
      <View style={styles.fundDataContainer}>
        <Text style={styles.fundValueText}>{fund.value}</Text>
        <Variation variation={fund.variation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fundContainer: {
    padding: 10,
    borderRadius: 4,
    borderColor: theme.colors.grey300,
    borderWidth: 1,
    width: percentageToPixels(37),
    height: percentageToPixels(38),
    justifyContent: 'space-between',
    marginRight: percentageToPixels(3),
  },
  fundCardHeader: {
    gap: percentageToPixels(1),
  },
  fundName: {
    fontSize: RFValue(12),
    fontFamily: theme.fonts.semiBold,
  },
  fundDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fundValueText: {
    fontSize: RFValue(14),
    fontFamily: theme.fonts.regular,
  },
});

export default FundCard;
