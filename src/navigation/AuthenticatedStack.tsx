import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/Feather';

import TradeScreen from '../screens/TradeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import theme from '../theme';
import HomeStackNavigator from './stacks/HomeStackNavigator';

export type TabParamList = {
  Home: undefined;
  Trade: undefined;
  Potfolio: undefined;
};

const AuthenticatedTab = createBottomTabNavigator<TabParamList>();

function AuthenticatedStackScreen() {
  return (
    <AuthenticatedTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.black,
      }}
    >
      <AuthenticatedTab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name={'home'} size={size} color={color} />
          ),
        }}
      />
      <AuthenticatedTab.Screen
        name="Trade"
        component={TradeScreen}
        options={{
          headerTitle: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'repeat'} size={size} color={color} />
          ),
        }}
      />
      <AuthenticatedTab.Screen
        name="Potfolio"
        component={PortfolioScreen}
        options={{
          headerTitle: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'pie-chart'} size={size} color={color} />
          ),
        }}
      />
    </AuthenticatedTab.Navigator>
  );
}

export default AuthenticatedStackScreen;
