import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { selectIsAuthenticated } from '../features/auth/authSelectors';
import AuthenticatedStackScreen, { TabParamList } from './AuthenticatedStack';
import UnauthenticatedStackScreen, {
  UnauthenticatedStackParamList,
} from './UnauthenticatedStack';
import { HomeStackParamList } from './stacks/HomeStackNavigator';

type NavigationProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
};

type RouteProps<T extends keyof RootStackParamList> = {
  route: RouteProp<RootStackParamList, T>;
};
export type ScreenProps<T extends keyof RootStackParamList> =
  NavigationProps<T> & RouteProps<T>;

export type RootStackParamList = TabParamList &
  HomeStackParamList &
  UnauthenticatedStackParamList;

const AppNavigator = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AuthenticatedStackScreen />
      ) : (
        <UnauthenticatedStackScreen />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
