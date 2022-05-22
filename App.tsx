import {
  Rubik_300Light_Italic,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
} from '@expo-google-fonts/rubik';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { SignIn } from './screens/signin';

SplashScreen.preventAutoHideAsync()
  .then((result) => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
  .catch(console.warn); // it

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          Rubik_300Light_Italic,
          Rubik_400Regular,
          Rubik_500Medium,
          Rubik_600SemiBold,
          Rubik_700Bold,
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const theme = extendTheme({
    colors: {
      primary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0072bc',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
    },
    components: {
      Input: {
        variants: {
          outline: {
            _focus: {
              borderColor: 'primary.500',
              bg: 'transparent',
            },
            _hover: {
              borderColor: 'primary.500',
              bg: 'transparent',
            },
          },
        },
      },
    },
    fontConfig: {
      Rubik: {
        300: {
          normal: 'Rubik_300Light_Italic',
        },
        400: {
          normal: 'Rubik_400Regular',
        },
        500: {
          normal: 'Rubik_500Medium',
        },
        600: {
          normal: 'Rubik_600SemiBold',
          bold: 'Rubik_600SemiBold',
        },
        700: {
          normal: 'Rubik_700Bold',
          bold: 'Rubik_700Bold',
        },
      },
    },
    fonts: {
      heading: 'Rubik',
      body: 'Rubik',
      mono: 'Rubik_500Medium',
    },
  });

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <NativeBaseProvider theme={theme}>
        <SignIn />
      </NativeBaseProvider>
    </View>
  );
}
