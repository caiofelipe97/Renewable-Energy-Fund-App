import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { ScreenProps } from '../navigation/AppNavigator';
import Input from '../components/Common/Input';
import theme from '../theme';
import Icon from 'react-native-vector-icons/Feather'; // Import the desired icon from FontAwesome
import Button from '../components/Common/Button';
import Checkbox from '../components/Screens/SignUpScreen/Checkbox';
import { RFValue } from 'react-native-responsive-fontsize';
import { percentageToPixels } from '../utils/percentageToPixels';

type SignUpScreenProps = ScreenProps<'SignUp'>;

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeWithTerms, setAgreeWithTerms] = useState(false);

  const [hidePassword, setHidePassword] = useState(true);

  const handleHidePassword = () => {
    setHidePassword(currentValue => !currentValue);
  };

  const handleCreateAccount = () => {
    if (email && password) navigation.navigate('Home');
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
          label="First Name"
          placeholder="John"
          onChangeText={text => setFirstName(text)}
        />
        <Input
          label="Last Name"
          placeholder="Doe"
          onChangeText={text => setLastName(text)}
        />
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
