import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PageOneScreen } from '../screens/PageOneScreen';
import { PageTwoScreen } from '../screens/PageTwoScreen';
import { PageThreeScreen } from '../screens/PageThreeScreen';
import { PersonScreen } from '../screens/PersonScreen';


export type RootStackParams = {
  pageOne: undefined,
  pageTwo: undefined,
  pageThree: undefined,
  personScreen: {id: number, name: string},
}


const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
          // initialRouteName='pageOne'
          screenOptions={{
            headerStyle: {
              elevation: 0,
              shadowColor: 'transparent',
            },

            cardStyle: {
              backgroundColor: 'orange'
            }
          }}
        >
          <Stack.Screen name="pageOne" options={{title:'pageOne'}} component={PageOneScreen} />
          <Stack.Screen name="pageTwo" options={{title:'pageTwo'}} component={PageTwoScreen} />
          <Stack.Screen name="pageThree" options={{title:'pageThree'}} component={PageThreeScreen} />
          <Stack.Screen name="personScreen" options={{title:'personScreen'}} component={PersonScreen} />
        </Stack.Navigator>
      );
}
