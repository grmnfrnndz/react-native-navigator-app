import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';

import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';

import { colors, styles } from '../theme/appTheme';
import { Text } from 'react-native-paper';
import { ElevationLevels } from 'react-native-paper/lib/typescript/src/types';



const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const {top : paddingTop} = useSafeAreaInsets()

    return (
        <Tab.Navigator
          
          sceneContainerStyle={{
            backgroundColor: 'white',
          }}
          screenOptions={ ({route}) => ({
            tabBarPressColor: colors.primary,
            tabBarShowIcon: true,
            tabBarActiveTintColor: colors.primary,
            tabBarIndicatorStyle: {
              backgroundColor: colors.primary, 
            },
            tabBarStyle: {
              backgroundColor: 'white',
              borderTopColor: colors.primary,
              borderTopWidth: 0,
              elevation: 0,
              paddingTop,
              shadowColor: 'transparent',
            
            },
            tabBarLabelStyle: {
              fontSize: 12,

            },
            tabBarIcon: ({color, focused}) => {

              let iconName: string = '';

              switch(route.name) {
                  case 'ChatScreen':
                    iconName = 'chatbubbles-outline'
                    break;
                  case 'ContactsScreen':
                      iconName = 'person-outline'
                      break;
                  case 'AlbumsScreen':
                      iconName = 'albums-outline'
                      break;
              }
      
              return <Icon name={iconName} size={20} color={colors.primary} />
            },
          })}

          
        >
          <Tab.Screen name="ChatScreen" component={ChatScreen} />
          <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
          <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
        </Tab.Navigator>
      );
}




