import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { ScreenProps } from '../navigation/AppNavigator';
import Input from '../components/Common/Input';
import theme from '../theme';
import Icon from 'react-native-vector-icons/Feather'; // Import the desired icon from FontAwesome
import Button from '../components/Common/Button';

type LoginScreenProps = ScreenProps<'Login'>;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const handleLogin = () => {
    if (email && password) navigation.navigate('Home');
  };

  const handleSignUpPress = () => {
    navigation.navigate('Signup');
  };

  const handleHidePassword = () => {
    setHidePassword(currentValue => !currentValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputsContainer}>
        <Input
          label="E-mail"
          placeholder="john@doe.com"
          onChangeText={text => setEmail(text)}
        />
        <Input
          label="Password"
          placeholder="Minimum 8 characters"
          secureTextEntry={hidePassword}
          Icon={
            <TouchableOpacity
              onPress={handleHidePassword}
              style={styles.hidePasswordButton}
            >
              {hidePassword ? (
                <Icon name="eye-off" size={20} color={theme.colors.grey700} />
              ) : (
                <Icon name="eye" size={20} color={theme.colors.grey700} />
              )}
            </TouchableOpacity>
          }
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={styles.actionsContainer}>
        <Button onPress={handleLogin} title="Login" />
        <Text style={styles.infoText}>
          {'Don’t have an account? '}

          <Text style={styles.touchableText} onPress={handleSignUpPress}>
            Sign up
          </Text>
          {' here'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    padding: 20,
    gap: 34,
  },
  title: {
    fontFamily: theme.fonts.semiBold,
    fontSize: 18,
  },
  inputsContainer: {
    width: '100%',
    gap: 20,
  },
  actionsContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 3,
    gap: 13,
  },
  hidePasswordButton: {
    padding: 5,
  },
  infoText: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.grey700,
    fontSize: 12,
  },
  touchableText: {
    color: theme.colors.grey700,
    fontSize: 12,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
