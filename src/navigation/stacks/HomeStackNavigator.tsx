import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import AssetDetails from '../../screens/AssetDetails';
import { Asset } from '../../types/Asset';
import HomeHeader from '../../components/Screens/Home/HomeHeader';
import AssetDetailsHeader from '../../components/Screens/AssetDetails/AssetDetailsHeader';

export interface AssetDetailsParams {
  asset: Asset;
}

export type HomeStackParamList = {
  HomeScreen: undefined;
  AssetDetails: AssetDetailsParams;
};

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ header: () => <HomeHeader /> }}
      />
      <Stack.Screen
        name="AssetDetails"
        component={AssetDetails}
        options={{
          header: () => <AssetDetailsHeader />,
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
