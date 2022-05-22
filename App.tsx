import { extendTheme, NativeBaseProvider } from 'native-base';
import { SignIn } from './screens/signin';

export default function App() {
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
  });

  return (
    <NativeBaseProvider theme={theme}>
      <SignIn />
    </NativeBaseProvider>
  );
}
