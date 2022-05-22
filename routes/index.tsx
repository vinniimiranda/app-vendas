import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { SignIn } from '../screens/signin';
import { AppRoutes } from './app.routes';

const Stack = createStackNavigator();

export function Main() {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="App" component={AppRoutes} />
    </Stack.Navigator>
  );
}
