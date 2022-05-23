import * as Location from 'expo-location';
import { VStack } from 'native-base';
import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export function Map() {
  const [location, setLocation] = React.useState<any>(null);
  React.useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
      }
      const { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
    })();
  }, []);
  return (
    <VStack height={'full'} width="full">
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        zoomEnabled
        region={{
          latitudeDelta: 0.00004,
          longitudeDelta: 0.00102111,
          latitude: location?.latitude || 20,
          longitude: location?.longitude || 0,
        }}
        loadingEnabled
      />
    </VStack>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
