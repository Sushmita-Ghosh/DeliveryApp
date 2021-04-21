import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
// for themeing
import { ThemeProvider } from "styled-components/native";

// Google Fonts
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";

// for the restaurant context
import { RestaurantsContextProvider } from "./src/services/restaurant/restaurant.context";

// for the location context
import { LocationContextProvider } from "./src/services/location/location.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import { Navigation } from "./src/infrastructure/navigation";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCBw9NWi1hCsUs-2FVp7Mps1euVg-ihNpA",
  authDomain: "deliveryapp-7c27a.firebaseapp.com",
  projectId: "deliveryapp-7c27a",
  storageBucket: "deliveryapp-7c27a.appspot.com",
  messagingSenderId: "864237038526",
  appId: "1:864237038526:web:0dee564363030c471467ef",
};

if (!firebase.apps.length) {
  // initialize once
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
