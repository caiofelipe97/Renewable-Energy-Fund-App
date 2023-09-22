import { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import { ScreenProps } from '../navigation/AppNavigator';
import Input from '../components/Common/Input';
import theme from '../theme';
import Button from '../components/Common/Button';
import { percentageToPixels } from '../utils/percentageToPixels';
import { login } from '../features/auth/authActions';
import { AppDispatch } from '../store';
import { selectLoading } from '../features/auth/authSelectors';

interface LoginScreenProps extends ScreenProps<'Login'> {}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const emailInputRef = useRef<TextInput | null>(null);
  const passwordInputRef = useRef<TextInput | null>(null);

  const loading = useSelector(selectLoading);

  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = () => {
    if (!email) {
      Alert.alert('Please enter an email address');
      emailInputRef.current?.focus();
      return;
    }

    if (!password) {
      Alert.alert('Please enter a password');
      passwordInputRef.current?.focus();
      return;
    }

    dispatch(login({ email, password }));
  };

  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  const handleHidePassword = () => {
    setHidePassword(currentValue => !currentValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputsContainer}>
        <Input
          ref={emailInputRef}
          label="E-mail"
          placeholder="john@doe.com"
          onChangeText={text => setEmail(text)}
          returnKeyType="next"
          onSubmitEditing={() => {
            if (passwordInputRef.current) {
              passwordInputRef.current.focus();
            }
          }}
        />
        <Input
          ref={passwordInputRef}
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
          returnKeyType="done"
        />
      </View>
      <View style={styles.actionsContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={theme.colors.primary} />
        ) : (
          <Button onPress={handleLogin} title="Login" />
        )}
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
    paddingVertical: percentageToPixels(5),
    paddingHorizontal: '5.3%',
    gap: percentageToPixels(4, 'height'),
  },
  title: {
    fontFamily: theme.fonts.semiBold,
    fontSize: RFValue(18),
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
    fontSize: RFValue(12),
  },
  touchableText: {
    color: theme.colors.grey700,
    fontSize: RFValue(12),
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
