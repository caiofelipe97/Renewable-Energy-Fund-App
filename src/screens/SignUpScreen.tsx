import { StyleSheet, Text, View } from 'react-native';
import { ScreenProps } from '../navigation/AppNavigator';

type SignUpScreenProps = ScreenProps<'Signup'>;

const SignUpScreen: React.FC<SignUpScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
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

export default SignUpScreen;
