import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Button from '../components/Common/Button';
import theme from '../theme';
import { ScreenProps } from '../navigation/AppNavigator';

interface SignUpSuccessProps extends ScreenProps<'SignUpSuccess'> {}

const SignUpSuccessScreen: React.FC<SignUpSuccessProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign-Up Successful!</Text>
      <Button
        title="Go to Login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontFamily: theme.fonts.semiBold, fontSize: RFValue(18) },
});

export default SignUpSuccessScreen;
