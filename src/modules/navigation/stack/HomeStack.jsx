import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../home/adapters/screens/Home";
import RestaurantDetail from "../../home/adapters/screens/RestaurantDetail";
const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Restaurantes" }}
      />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
        options={{ title: "Detalle del restaurante" }}
      />
    </Stack.Navigator>
  );
}
