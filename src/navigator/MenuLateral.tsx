import React from 'react';
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';

import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';

import { colors, styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();


export const MenuLateral = ()  => {

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType: (width >= 768) ? 'permanent': 'front',
      
    }}
    drawerContent={(props) => <MenuInternal {...props}/>}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}


const MenuInternal = ({navigation}: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            {/* avatar */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://w.wallhaven.cc/full/zy/wallhaven-zy5y1o.jpg'
                    }}
                    style={styles.avatar}
                />
            </View>

            <View style={styles.menuContainer}>

                <TouchableOpacity 
                    style={styles.menuButton}
                    onPress={() => navigation.navigate('Tabs')}
                >
                    <Icon name="rocket-outline" size={25} color={colors.primary} /><Text style={styles.menuTexto}>Navigator Stack</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.menuButton}
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Icon name="chevron-up-circle-outline" size={25} color={colors.primary} /><Text style={styles.menuTexto}>Settings</Text>
                </TouchableOpacity>

            </View>

        </DrawerContentScrollView>
    )
}