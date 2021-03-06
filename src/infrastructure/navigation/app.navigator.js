import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurant.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { CheckoutScreen } from "../../features/checkout/screens/checkout.screen";
import { SettingsNavigator } from "./settings.navigator";
import { CartContextProvider } from "../../services/cart/cart.context";

import { RestaurantsContextProvider } from "../../services/restaurant/restaurant.context";
import { LocationContextProvider } from "../../services/location/location.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Checkout: "md-cart",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <LocationContextProvider>
    <RestaurantsContextProvider>
      <CartContextProvider>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
          <Tab.Screen name="Checkout" component={CheckoutScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
      </CartContextProvider>
    </RestaurantsContextProvider>
  </LocationContextProvider>
);
