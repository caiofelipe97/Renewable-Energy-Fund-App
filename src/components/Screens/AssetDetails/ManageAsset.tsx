import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../../theme';
import { percentageToPixels } from '../../../utils/percentageToPixels';
import Variation from '../../Common/Variation';
import Button from '../../Common/Button';

const ManageAsset: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Icon name={'pie-chart'} size={22} color={theme.colors.black} />
        <Text style={styles.title}>Your Portfolio</Text>
      </View>
      <View style={styles.rowSpaced}>
        <Text style={styles.assetBalance}>18 credits</Text>
        <Text style={styles.assetBalance}>$328.14</Text>
      </View>
      <View style={styles.rowSpaced}>
        <Variation percentage={8.41} />
        <Text style={styles.lastPurchase}>Last purchase 28d ago</Text>
      </View>
      <View style={styles.actionButtonsContainer}>
        <Button title="Sell" variant="outlined" />
        <Button title="Retire credits" variant="secondary" />
      </View>
      <Text style={styles.previousInfo}>
        You’ve previously retired 28 credits of this asset
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Please note that prices are for reference only and may vary at the
          time of excecuting a buy or sell order. {'\n'}
          {'\n'}The information provided is not investment advice, and should
          not be used as a recommendation to buy or sell assets.
        </Text>
      </View>
      <Button title="Buy" variant="primary" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.padding.default,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowSpaced: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginLeft: 4,
    fontFamily: theme.fonts.semiBold,
    fontSize: RFValue(17),
    marginBottom: percentageToPixels(1.6),
  },
  assetBalance: {
    fontFamily: theme.fonts.semiBold,
    fontSize: RFValue(24),
    color: theme.colors.black,
  },
  lastPurchase: {
    fontFamily: theme.fonts.medium,
    fontSize: RFValue(14),
    color: theme.colors.grey700,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    gap: theme.padding.default / 2,
    paddingVertical: theme.padding.default / 2,
  },
  previousInfo: {
    fontFamily: theme.fonts.regular,
    fontSize: RFValue(11),
    color: theme.colors.grey700,
  },
  infoContainer: {
    marginTop: percentageToPixels(10),
    marginBottom: percentageToPixels(7),
    backgroundColor: theme.colors.grey100,
    padding: theme.padding.default / 2,
    borderRadius: 4,
  },
  infoText: {
    fontFamily: theme.fonts.regular,
    fontSize: RFValue(12),
    color: theme.colors.grey700,
  },
});

export default ManageAsset;
