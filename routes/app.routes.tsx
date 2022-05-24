import { MaterialCommunityIcons } from '@expo/vector-icons/';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Box, Icon } from 'native-base';
import { useEffect } from 'react';
import { Home } from '../screens/home';
import { Map } from '../screens/map';
import { SearchCustomer } from '../screens/search-customer';

const Drawer = createDrawerNavigator();

const Search = () => {
  return <Box style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>Consulta</Box>;
};
const Orders = () => {
  return <Box style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>Consulta pedidos</Box>;
};
const Prospects = () => {
  return <Box style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>Visitas</Box>;
};

const Exit = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    navigation.navigate('SignIn');
  }, []);
  return <Box style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>Sair</Box>;
};

export function AppRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        key="Home"
        options={{
          drawerLabel: 'Inicio',
          headerTitle: 'Inicio',
          drawerIcon: () => <Icon as={MaterialCommunityIcons} name="home" size={'lg'} />,
        }}
      />
      <Drawer.Screen
        name="Search"
        component={SearchCustomer}
        key={'Search'}
        options={{
          drawerLabel: 'Consulta cliente',
          headerTitle: 'Consulta cliente',
          drawerIcon: () => <Icon as={MaterialCommunityIcons} name="account-search" size={'lg'} />,
        }}
      />
      <Drawer.Screen
        name="Orders"
        key={'Orders'}
        component={Orders}
        options={{
          drawerLabel: 'Pedidos',
          headerTitle: 'Pedidos',
          drawerIcon: () => <Icon as={MaterialCommunityIcons} name="format-list-text" size={'lg'} />,
        }}
      />
      <Drawer.Screen
        name="Prospects"
        key={'Prospects'}
        component={Prospects}
        options={{
          drawerLabel: 'Visitas',
          headerTitle: 'Visitas',
          drawerIcon: () => <Icon as={MaterialCommunityIcons} name="car" size={'lg'} />,
        }}
      />
      <Drawer.Screen
        name="Maps"
        key={'Maps'}
        component={Map}
        options={{
          drawerLabel: 'Mapa',
          headerTitle: 'Mapa',
          drawerIcon: () => <Icon as={MaterialCommunityIcons} name="google-maps" size={'lg'} />,
        }}
      />
      <Drawer.Screen
        name="Exit"
        key={'Exit'}
        component={Exit}
        options={{
          drawerLabel: 'Sair',
          headerTitle: '',
          drawerIcon: () => <Icon as={MaterialCommunityIcons} name="exit-to-app" size={'lg'} />,
        }}
      />
    </Drawer.Navigator>
  );
}
