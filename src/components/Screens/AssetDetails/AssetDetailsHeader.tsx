import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import theme from '../../../theme';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import { AssetDetailsParams } from '../../../navigation/stacks/HomeStackNavigator';
import { RFValue } from 'react-native-responsive-fontsize';

const AssetDetailsHeader: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route =
    useRoute<RouteProp<Record<string, AssetDetailsParams>, string>>();
  const { asset } = route.params;

  const handleGoBack = () => navigation.goBack();

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.white}
        barStyle={'dark-content'}
      />
      <View style={styles.statusBarBackground} />

      <View style={styles.container}>
        <TouchableOpacity style={styles.column} onPress={handleGoBack}>
          <Icon name="arrow-left" size={24} color={theme.colors.black} />
        </TouchableOpacity>
        <View style={[styles.titleContainer, styles.column]}>
          <Text style={styles.assetName}>{asset.name}</Text>
          <Text style={styles.assetAbbreviation}>{asset.abbreviation}</Text>
        </View>
        <View style={styles.column} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.padding.default,
    paddingVertical: theme.padding.default / 2,
    backgroundColor: theme.colors.white,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.grey100,
  },
  statusBarBackground: {
    height: Platform.OS === 'ios' ? 40 : 0,
    backgroundColor: theme.colors.white,
  },
  column: { flex: 1 },
  titleContainer: {
    alignItems: 'center',
  },
  assetName: {
    fontSize: RFValue(17),
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.black,
  },
  assetAbbreviation: {
    fontSize: RFValue(14),
    fontFamily: theme.fonts.regular,
    color: theme.colors.grey600,
    marginTop: -3,
  },
});

export default AssetDetailsHeader;
