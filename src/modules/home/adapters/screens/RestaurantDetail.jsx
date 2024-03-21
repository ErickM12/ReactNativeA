import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { Image, AirbnbRating } from "@rneui/base";

export default function RestaurantDetail(props) {
  const { navigation } = props;
  const { params } = props.route;

  //objeto eliminar
  const routeCoordinates = [
    { latitude: 37.7894, longitude: -122.4225 }, // Punto de inicio
    { latitude: 37.7855, longitude: -122.4341 }, // Punto intermedio
    
  ];

  useEffect(() => {
    navigation.setOptions({ title: params.title });
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={
            params.image
              ? { uri: params.image }
              : { uri: "https://placehold.co/580x200" }
          }
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.row}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            {params.title}
          </Text>
          <AirbnbRating
            count={5}
            defaultRating={params.rating}
            size={16}
            isDisabled={true}
            showRating={false}
          />
        </View>
        <Text style={{ fontSize: 14, paddingHorizontal: 16, marginBottom: 16 }}>
          {params.description}
        </Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: params.longitude,
            longitude: params.latitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: params.longitude,
              longitude: params.latitude,
            }}
            title={params.title}
            description={params.description}
          />
        </MapView>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {routeCoordinates.map((coordinate, index) => (
            <Marker
              key={index}
              coordinate={coordinate}
              title={`Punto ${index + 1}`}
            />
          ))}
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#000" // Color de la línea
            strokeWidth={2} // Grosor de la línea
          />
        </MapView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  map: {
    width: "100%",
    height: 300,
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 250,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
});
