import { useEffect, useState } from 'react';
import { registerRootComponent } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import Loading from './components/Common/Loading';

const fetchFonts = () => {
  return Font.loadAsync({
    'Sora-Regular': require('../assets/fonts/Sora-Regular.ttf'),
    'Sora-Medium': require('../assets/fonts/Sora-Medium.ttf'),
    'Sora-SemiBold': require('../assets/fonts/Sora-SemiBold.ttf'),
  });
};

async function loadResourcesAsync() {
  try {
    SplashScreen.preventAutoHideAsync();

    await fetchFonts();
  } catch (e) {
    console.error(e);
  } finally {
    SplashScreen.hideAsync();
  }
}

function App() {
  const [isAppReady, setAppReady] = useState(false);

  useEffect(() => {
    async function prepareApp() {
      try {
        await loadResourcesAsync();
        setAppReady(true);
      } catch (error) {
        console.error(error);
      }
    }

    prepareApp();
  }, []);

  if (!isAppReady) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default registerRootComponent(App);
