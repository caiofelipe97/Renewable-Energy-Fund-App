import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../theme';
import BusinessStatisticsIcon from '../../Common/Icons/BusinessStatisticsIcon';
import { percentageToPixels } from '../../../utils/percentageToPixels';

interface LearnMoreBannerProps {}

const LearnMoreBanner: React.FC<LearnMoreBannerProps> = () => {
  return (
    <TouchableOpacity style={styles.bannerContainer}>
      <View style={styles.bannerInfoContainer}>
        <Text style={styles.title}>Learn more about carbon credits</Text>
        <Text style={styles.info}>Check out our top tips!</Text>
      </View>
      <BusinessStatisticsIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    padding: theme.padding.default,
  },
  bannerInfoContainer: {
    flexDirection: 'column',
    gap: percentageToPixels(2.65),
    maxWidth: percentageToPixels(50),
  },
  title: {
    fontSize: RFValue(16),
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.white,
  },
  info: {
    fontSize: RFValue(12),
    fontFamily: theme.fonts.regular,
    color: theme.colors.white,
  },
});

export default LearnMoreBanner;
