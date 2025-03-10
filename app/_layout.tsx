import { useEffect } from 'react';
import { useFonts } from 'expo-font';

import { SplashScreen, Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import "@/global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Karla: require('../assets/fonts/Karla-VariableFont_wght.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GluestackUIProvider mode="system">
      <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false}}/>
      </GestureHandlerRootView>
    </GluestackUIProvider>
);
}
