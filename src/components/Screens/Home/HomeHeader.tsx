import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import { useSelector } from 'react-redux';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../theme';
import { selectPotfolio } from '../../../features/potfolio/portfolioSelectors';
import Variation from '../../Common/Variation';
import CoinIcon from '../../Common/Icons/CoinIcon';
import TextButton from '../../Common/TextButton';

function HomeHeader() {
  const { accountBalance, value, variation } = useSelector(selectPotfolio);

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.white}
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        <View style={styles.statusBarBackground} />
        <View style={styles.header}>
          <TouchableOpacity style={styles.profileButton}>
            <Icon name="user" size={24} color={theme.colors.black} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountBalanceContainer}>
            <Text
              style={styles.accountBalanceText}
            >{`Account: $${accountBalance}`}</Text>
            <Icon name="chevron-down" size={12} color={theme.colors.black} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="bell" size={24} color={theme.colors.black} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.portfolio}>Portfolio</Text>
            <View style={styles.portfolioValueContainer}>
              <Text style={styles.portfolioValueText}>{value}</Text>
              <Variation percentage={variation} />
            </View>
          </View>
          <TextButton>
            <CoinIcon />
            <Text style={styles.earnRewardsText}>Earn Rewards</Text>
          </TextButton>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: theme.padding.default + 10,
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.padding.default,
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.grey100,
  },
  statusBarBackground: {
    height: Platform.OS === 'ios' ? 40 : 0,
    backgroundColor: theme.colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  profileButton: {
    backgroundColor: theme.colors.grey100,
    borderRadius: 99,
    padding: 4,
  },
  accountBalanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountBalanceText: {
    fontFamily: theme.fonts.semiBold,
    fontSize: RFValue(14),
  },
  portfolio: {
    fontFamily: theme.fonts.regular,
    fontSize: RFValue(12),
  },
  portfolioValueContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  portfolioValueText: {
    fontFamily: theme.fonts.semiBold,
    fontSize: RFValue(24),
  },

  earnRewardsText: {
    fontFamily: theme.fonts.semiBold,
    fontSize: RFValue(11),
    color: theme.colors.primary,
  },
});

export default HomeHeader;
