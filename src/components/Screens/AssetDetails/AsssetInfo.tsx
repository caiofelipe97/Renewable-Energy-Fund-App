import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../../theme';
import { percentageToPixels } from '../../../utils/percentageToPixels';

const ASSET_INFO = [
  { title: 'AUM', value: '$430.88m' },
  { title: 'Issue Date', value: '18/04/2022' },
  { title: 'Vintage Range', value: '2019 – 2022' },
  { title: 'TER', value: '0.15%' },
  { title: 'Price at Close', value: '$17.68' },
  { title: 'Price at Open', value: '$17.74' },
];

const AsssetInfo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Info & Stats</Text>
      <View style={styles.content}>
        {ASSET_INFO.map(assetInfo => (
          <View key={assetInfo.title} style={styles.item}>
            <View style={styles.itemTitleContainer}>
              <Text style={styles.itemTitle}>{assetInfo.title}</Text>
              <Icon name="info" size={14} color={theme.colors.grey700} />
            </View>
            <Text style={styles.itemValue}>{assetInfo.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.padding.default,
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontFamily: theme.fonts.semiBold,
    fontSize: RFValue(17),
    marginBottom: percentageToPixels(1.6),
  },
  item: {
    width: '50%',
    padding: 10,
    paddingVertical: percentageToPixels(1.8),
  },
  itemTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  itemTitle: {
    fontFamily: theme.fonts.regular,
    fontSize: RFValue(14),
    color: theme.colors.grey700,
    lineHeight: RFValue(18),
  },
  itemValue: {
    fontFamily: theme.fonts.regular,
    fontSize: RFValue(14),
    color: theme.colors.black,
  },
});

export default AsssetInfo;
