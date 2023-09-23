import React from 'react';
import { StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { percentageToPixels } from '../../../utils/percentageToPixels';
import FundCard from './FundCard';
import { useSelector } from 'react-redux';
import { selectFunds } from '../../../features/potfolio/portfolioSelectors';
import theme from '../../../theme';

const FundList: React.FC = () => {
  const funds = useSelector(selectFunds);

  return (
    <FlashList
      renderItem={({ item }) => {
        return <FundCard fund={item} />;
      }}
      estimatedItemSize={percentageToPixels(37)}
      data={funds}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.name}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: theme.padding.default,
  },
});

export default FundList;
