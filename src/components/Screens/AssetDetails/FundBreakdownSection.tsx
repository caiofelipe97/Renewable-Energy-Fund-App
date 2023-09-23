import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ListRenderItemInfo,
  Image,
} from 'react-native';
import { percentageToPixels } from '../../../utils/percentageToPixels';
import theme from '../../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

const fundsHighlighted = [
  {
    image:
      'https://images.squarespace-cdn.com/content/v1/629ec8b60d34d83ed4c5d282/9c877b05-1269-4b37-9e68-4b2fb2533c60/Webpage+Gallery1.6.png?format=2500w',
    logo: 'https://images.squarespace-cdn.com/content/v1/629ec8b60d34d83ed4c5d282/63f80d47-1748-4ae5-b03d-1bede6638e17/AspiraDAC-Logo-RGB-Black.png?format=1500w',
    text: 'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules.',
  },
  {
    image:
      'https://www.cleanenergywire.org/sites/default/files/climeworks_direct_air_capture_storage_plan_orca_5.jpg',
    logo: 'https://prowly-uploads.s3.eu-west-1.amazonaws.com/uploads/press_rooms/company_logos/30419/fbe5f114c6a3053fc54172b61f3c1210.png',
    text: 'uses renewable geothermal energy and waste heat to capture CO₂ directly from the air.',
  },
];

const TABS = ['Highlighted', 'Value', 'Vintage', 'Registry'];

const FundBreakdownSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('Highlighted');

  const getTabStyle = (tab: string) => {
    const isTabSelected = tab === selectedTab;
    return {
      ...styles.tab,
      borderBottomWidth: isTabSelected ? 2 : 0,
      borderBottomColor: isTabSelected ? theme.colors.primary : 'transparent',
    };
  };

  const getTabTitleStyle = (tab: string) => {
    const isTabSelected = tab === selectedTab;
    return {
      ...styles.tabTitle,
      color: isTabSelected ? theme.colors.black : theme.colors.grey700,
    };
  };

  const renderFundBreakdown = useCallback(
    ({
      item,
    }: ListRenderItemInfo<{ text: string; logo: string; image: string }>) => {
      return (
        <View style={styles.fundBreakdown}>
          <Image
            source={{ uri: item.image }}
            width={percentageToPixels(60)}
            height={100}
            resizeMode="cover"
          />
          <View style={styles.fundBreakdownContent}>
            <Image
              source={{ uri: item.logo }}
              width={percentageToPixels(20)}
              height={18}
              resizeMode="contain"
            />

            <Text style={styles.breakdownText}>{item.text}</Text>
            <TouchableOpacity>
              <Text style={styles.breakdownReadMoreText}>Read more</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    },
    [],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fund Breakdown</Text>
      <View style={styles.tabsContainer}>
        {TABS.map(tab => (
          <TouchableOpacity
            key={tab}
            style={getTabStyle(tab)}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={getTabTitleStyle(tab)}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        renderItem={renderFundBreakdown}
        data={fundsHighlighted}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.text}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: percentageToPixels(1.6),
  },
  title: {
    fontFamily: theme.fonts.semiBold,
    fontSize: RFValue(17),
    marginLeft: theme.padding.default,
  },
  listContainer: {
    paddingHorizontal: theme.padding.default,
  },
  tab: {
    paddingVertical: percentageToPixels(1.4),
  },
  fundBreakdown: {
    width: percentageToPixels(60),
    borderWidth: 1,
    borderColor: theme.colors.grey300,
    borderRadius: 4,
    marginRight: theme.padding.default / 1.5,
    overflow: 'hidden',
  },
  fundBreakdownContent: {
    padding: theme.padding.default / 2,
    flex: 1,
    justifyContent: 'space-between',
  },
  tabsContainer: {
    paddingHorizontal: theme.padding.default,
    flexDirection: 'row',
    gap: theme.padding.default,
  },
  tabTitle: {
    fontFamily: theme.fonts.semiBold,
    fontSize: RFValue(14),
  },
  breakdownText: {
    fontFamily: theme.fonts.regular,
    fontSize: RFValue(14),
  },
  breakdownReadMoreText: {
    fontFamily: theme.fonts.regular,
    fontSize: RFValue(12),
    textDecorationLine: 'underline',
  },
});

export default FundBreakdownSection;
