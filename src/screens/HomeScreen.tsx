import { StyleSheet, Text, View } from 'react-native';
import { ScreenProps } from '../navigation/AppNavigator';
import theme from '../theme';

interface HomeScreenProps extends ScreenProps<'Home'> {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
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
});

export default HomeScreen;
