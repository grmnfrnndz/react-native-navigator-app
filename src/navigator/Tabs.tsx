import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


import { TabOneScreen } from '../screens/TabOneScreen';
import { StackNavigator } from './StackNavigator';

import { colors } from '../theme/appTheme';
import { TopTabNavigator } from './TopTabNavigator';



export const Tabs = () => {
  return (Platform.OS == 'ios') ? <TabsIOS/> : <TabsAndroid/>;
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
    sceneAnimationEnabled={true}
    barStyle={{
      backgroundColor: colors.secundary
    }}
    
    screenOptions={({route}) =>  ({
      tabBarActiveTintColor: colors.primary,
      tabBarStyle: {
        borderTopColor: colors.primary,
        borderTopWidth: 0,
        elevation: 0,
      },
      tabBarLabelStyle: {
        fontSize: 15,
        
      },
      tabBarIcon: ({color, focused}) => {

        let iconName: string = '';
        switch(route.name) {
          case 'TabOneScreen':
            iconName = 'rocket-outline'
            break;
          case 'TopTabNavigator':
              iconName = 'fast-food-outline'
              break;
          case 'StackNavigator':
              iconName = 'musical-notes-outline'
              break;
      }

        return <Icon name={iconName} size={20} color={colors.primary} />
      },
    })}

    >
      <BottomTabAndroid.Screen name="TabOneScreen" options={{title: 'TabOne'}} component={TabOneScreen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{title: 'TopTab'}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}}component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}


const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) =>  ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, focused, size}) => {

          let iconName: string = '';
          switch(route.name) {
              case 'TabOneScreen':
                iconName = 'rocket-outline'
                break;
              case 'TopTabNavigator':
                  iconName = 'fast-food-outline'
                  break;
              case 'StackNavigator':
                  iconName = 'musical-notes-outline'
                  break;
          }

          return <Icon name={iconName} size={10} color={colors.primary}/>
        },
      })}
      
    >
      {/* <Tab.Screen name="TabOneScreen" options={{title: 'TabOne', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text>}} component={TabOneScreen} /> */}
      <BottomTabIOS.Screen name="TabOneScreen" options={{title: 'TabOne'}} component={TabOneScreen} />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{title: 'TopTab'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}}component={StackNavigator} />
      
    </BottomTabIOS.Navigator>
  );
}