import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ScreenProps } from '../navigation/AppNavigator';
import theme from '../theme';
import FundList from '../components/Screens/Home/FundList';
import { RFValue } from 'react-native-responsive-fontsize';
import { percentageToPixels } from '../utils/percentageToPixels';
import LearnMoreBanner from '../components/Screens/Home/LearnMoreBanner';

interface HomeScreenProps extends ScreenProps<'HomeScreen'> {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <ScrollView contentContainerStyle={styles.container} bounces={false}>
      <Text style={styles.title}>Funds</Text>
      <FundList />
      <View style={styles.content}>
        <LearnMoreBanner />
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Text style={styles.cardText}>Why should you invest here?</Text>
          </View>
          <View style={styles.card} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    paddingVertical: theme.padding.default,
    gap: percentageToPixels(2.5, 'height'),
  },
  content: {
    paddingHorizontal: theme.padding.default,
    gap: percentageToPixels(2.5, 'height'),
  },
  title: {
    fontFamily: theme.fonts.semiBold,
    fontSize: RFValue(18),
    marginLeft: theme.padding.default,
  },
  cardsContainer: {
    flexDirection: 'row',
    gap: percentageToPixels(4.7),
  },
  card: {
    backgroundColor: theme.colors.grey100,
    borderRadius: 10,
    flex: 1,
    height: percentageToPixels(30, 'height'),
    width: '100%',
    paddingVertical: 21,
    paddingHorizontal: 12,
  },
  cardText: {
    fontFamily: theme.fonts.semiBold,
    fontSize: RFValue(12),
  },
});

export default HomeScreen;
