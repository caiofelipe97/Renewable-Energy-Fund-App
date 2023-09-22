import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';

export type UnauthenticatedStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

const UnauthenticatedStack =
  createStackNavigator<UnauthenticatedStackParamList>();

function UnauthenticatedStackScreen() {
  return (
    <UnauthenticatedStack.Navigator>
      <UnauthenticatedStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerTitle: '' }}
      />
      <UnauthenticatedStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerTitle: '' }}
      />
    </UnauthenticatedStack.Navigator>
  );
}

export default UnauthenticatedStackScreen;
