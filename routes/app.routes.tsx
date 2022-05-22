import { MaterialCommunityIcons } from '@expo/vector-icons/';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'native-base';
import { Home } from '../screens/home';

const Drawer = createDrawerNavigator();

export function AppRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: 'Inicio',
          headerTitle: 'Inicio',
          drawerIcon: () => <Icon as={MaterialCommunityIcons} name="home" size={'lg'} />,
        }}
      />
      <Drawer.Screen
        name="Search"
        component={Home}
        options={{
          drawerLabel: 'Consulta cliente',
          headerTitle: 'Consulta cliente',
          drawerIcon: () => <Icon as={MaterialCommunityIcons} name="account-search" size={'lg'} />,
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={Home}
        options={{
          drawerLabel: 'Pedidos',
          headerTitle: 'Pedidos',
          drawerIcon: () => <Icon as={MaterialCommunityIcons} name="format-list-text" size={'lg'} />,
        }}
      />
      <Drawer.Screen
        name="Prospects"
        component={Home}
        options={{
          drawerLabel: 'Visitas',
          headerTitle: 'Visitas',
          drawerIcon: () => <Icon as={MaterialCommunityIcons} name="car" size={'lg'} />,
        }}
      />
      <Drawer.Screen
        name="Maps"
        component={Home}
        options={{
          drawerLabel: 'Mapa',
          headerTitle: 'Mapa',
          drawerIcon: () => <Icon as={MaterialCommunityIcons} name="google-maps" size={'lg'} />,
        }}
      />
      <Drawer.Screen
        name="Exit"
        component={Home}
        options={{
          drawerLabel: 'Sair',
          headerTitle: '',
          drawerIcon: () => <Icon as={MaterialCommunityIcons} name="exit-to-app" size={'lg'} />,
        }}
      />
    </Drawer.Navigator>
  );
}
