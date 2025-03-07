import { useEffect } from 'react';
import { useFonts } from 'expo-font';

import { SplashScreen, Tabs } from "expo-router";

import { House, Tag, SignOut } from 'phosphor-react-native';

import "@/global.css";
export default function TabLayout() {
  const [fontsLoaded] = useFonts({
    Karla: require('../../assets/fonts/Karla-VariableFont_wght.ttf'),
  });

  const colors = {
    gray2: '#3E3A40',
    gray4: '#9F9BA1',
    redLight: '#EE7979'
  }

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ size, focused }) => <House size={size} color={focused ? colors.gray2 : colors.gray4} weight={focused ? 'bold' : 'regular'} />,
        }}
      />
      <Tabs.Screen
        name="myAds"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ size, focused }) => <Tag size={size} color={focused ? colors.gray2 : colors.gray4} weight={focused ? 'bold' : 'regular'} />,
        }}
      />
      {/* PROVISÓRIO */}
      <Tabs.Screen
        name="logout"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ size }) => <SignOut size={size} color={colors.redLight} weight='regular' />,
        }}
      />
    </Tabs>
  );
}
