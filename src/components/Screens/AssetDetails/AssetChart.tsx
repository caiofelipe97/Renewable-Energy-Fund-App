import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../theme';
import Variation from '../../Common/Variation';
import { Asset } from '../../../types/Asset';
import SingleAssetChart from '../../Common/Charts/SingleAssetChart';
import { percentageToPixels } from '../../../utils/percentageToPixels';
import TextButton from '../../Common/TextButton';

const filterOptions = ['1h', '1d', '1w', '1m', '1y', 'All'];

interface AssetChartProps {
  asset: Asset;
}

const AssetChart: React.FC<AssetChartProps> = ({ asset }) => {
  const [filterBy, setFilterBy] = useState('1d');

  const getFilterLabelStyle = (filterOption: string) => {
    const isFilterSelected = filterBy === filterOption;
    return {
      ...styles.filterLabel,
      color: isFilterSelected ? theme.colors.primary : theme.colors.grey700,
    };
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>${asset.value}</Text>
          <Variation
            percentage={asset.variation.percentage}
            value={asset.variation.value}
          />
        </View>

        <Text style={styles.title}>2022</Text>
      </View>
      <View style={styles.content}>
        <Text style={[styles.chartLabel, styles.highestPrice]}>$19.02</Text>

        <SingleAssetChart width={percentageToPixels(100)} />
        <Text style={[styles.chartLabel, styles.lowestPrice]}>$17.66</Text>

        <View style={styles.filtersContainer}>
          {filterOptions.map(filterOption => (
            <TextButton
              key={filterOption}
              noBackground={filterBy !== filterOption}
              onPress={() => setFilterBy(filterOption)}
            >
              <Text style={getFilterLabelStyle(filterOption)}>
                {filterOption}
              </Text>
            </TextButton>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.padding.default / 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: theme.padding.default,
  },
  title: {
    fontFamily: theme.fonts.semiBold,
    fontSize: RFValue(24),
  },
  content: {
    gap: 6,
  },

  chartLabel: {
    fontFamily: theme.fonts.medium,
    fontSize: RFValue(14),
    color: theme.colors.grey700,
  },
  lowestPrice: {
    marginLeft: percentageToPixels(10),
  },
  highestPrice: { marginLeft: percentageToPixels(58) },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.padding.default,
    paddingBottom: theme.padding.default / 2,
  },
  filterLabel: {
    fontFamily: theme.fonts.medium,
    fontSize: RFValue(15),
  },
});

export default AssetChart;
