import { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';
import { ScreenProps } from '../navigation/AppNavigator';
import Input from '../components/Common/Input';
import theme from '../theme';
import Button from '../components/Common/Button';
import Checkbox from '../components/Screens/SignUpScreen/Checkbox';
import { percentageToPixels } from '../utils/percentageToPixels';

interface SignUpScreenProps extends ScreenProps<'SignUp'> {}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeWithTerms, setAgreeWithTerms] = useState(false);

  const [hidePassword, setHidePassword] = useState(true);

  const firstNameInputRef = useRef<TextInput | null>(null);
  const lastNameInputRef = useRef<TextInput | null>(null);
  const emailInputRef = useRef<TextInput | null>(null);
  const passwordInputRef = useRef<TextInput | null>(null);

  const handleHidePassword = () => {
    setHidePassword(currentValue => !currentValue);
  };

  const handleCreateAccount = () => {
    if (!firstName) {
      Alert.alert('Please enter your first name');
      firstNameInputRef.current?.focus();
      return;
    }

    if (!lastName) {
      Alert.alert('Please enter your last name');
      lastNameInputRef.current?.focus();
      return;
    }

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

    if (!agreeWithTerms) {
      Alert.alert('You need agree to the Terms of Service and Privacy policy');
      return;
    }
    Alert.alert(
      'Account successfully created',
      'You can now login into your account',
    );
    navigation.navigate('Login');
  };

  const handleGoToLogin = () => {
    navigation.navigate('Login');
  };

  const handleToggleAgreeWithTerms = () => {
    setAgreeWithTerms(currentValue => !currentValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your account</Text>
      <View style={styles.inputsContainer}>
        <Input
          ref={firstNameInputRef}
          label="First Name"
          placeholder="John"
          onChangeText={text => setFirstName(text)}
          returnKeyType="next"
          onSubmitEditing={() => {
            if (lastNameInputRef.current) {
              lastNameInputRef.current.focus();
            }
          }}
        />
        <Input
          ref={lastNameInputRef}
          label="Last Name"
          placeholder="Doe"
          onChangeText={text => setLastName(text)}
          returnKeyType="next"
          onSubmitEditing={() => {
            if (emailInputRef.current) {
              emailInputRef.current.focus();
            }
          }}
        />
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
        <Checkbox
          isChecked={agreeWithTerms}
          toggleCheckbox={handleToggleAgreeWithTerms}
          LabelText={
            <Text style={styles.infoText}>
              I am over 18 years of age and I have read and agree to the{' '}
              <Text style={styles.blackText}>Terms of Service</Text> and{' '}
              <Text style={styles.blackText}>Privacy policy.</Text>
            </Text>
          }
        />
      </View>
      <View style={styles.actionsContainer}>
        <Button onPress={handleCreateAccount} title="Create account" />
        <Text style={styles.infoText}>
          Already have an account?{' '}
          <Text style={styles.touchableText} onPress={handleGoToLogin}>
            Log in Here
          </Text>
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
    flexWrap: 'wrap',
  },
  blackText: {
    color: theme.colors.black,
    fontSize: RFValue(12),
  },
  touchableText: {
    color: theme.colors.black,
    fontSize: RFValue(12),
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;
