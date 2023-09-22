import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

export type AuthenticatedStackParamList = {
  Home: undefined;
};

const AuthenticatedStack = createStackNavigator<AuthenticatedStackParamList>();

function AuthenticatedStackScreen() {
  return (
    <AuthenticatedStack.Navigator>
      <AuthenticatedStack.Screen name="Home" component={HomeScreen} />
    </AuthenticatedStack.Navigator>
  );
}

export default AuthenticatedStackScreen;
