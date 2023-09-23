import { StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ScreenProps } from '../navigation/AppNavigator';
import theme from '../theme';

interface PortfolioScreenProps extends ScreenProps<'Potfolio'> {}

const PortfolioScreen: React.FC<PortfolioScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Portfolio</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        volutpat sit amet nunc eu luctus. Nullam id lacinia nisi. Nullam aliquet
        odio et ligula ullamcorper, a bibendum metus efficitur. Maecenas in elit
        eu urna bibendum lacinia. Aenean a dui at nunc eleifend semper. Sed
        condimentum metus ut justo posuere, ac convallis neque vulputate.
        Integer id ante id lorem efficitur dignissim. Suspendisse potenti. Sed
        euismod varius sem a vehicula. Quisque rhoncus tellus a odio tincidunt,
        id facilisis erat dapibus. Curabitur faucibus urna non ipsum rhoncus, a
        viverra libero bibendum. Proin egestas quam nec felis tincidunt
        eleifend. Etiam nec lectus in arcu sodales aliquet. Nullam vulput
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
  title: {
    fontFamily: theme.fonts.semiBold,
    fontSize: RFValue(18),
  },
});

export default PortfolioScreen;
