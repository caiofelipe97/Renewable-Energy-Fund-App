import { StyleSheet, Button, View } from 'react-native';
import { ScreenProps } from '../navigation/AppNavigator';

type LoginScreenProps = ScreenProps<'Login'>;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Your login UI */}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
