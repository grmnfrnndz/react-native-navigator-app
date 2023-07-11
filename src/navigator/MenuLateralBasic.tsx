import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasic = ()  => {

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType: (width >= 768) ? 'permanent': 'front',
    }}
    >
      <Drawer.Screen name="StackNavigator" options={{title:'StackNavigator'}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{title:'SettingsScreen'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}