import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateralBasic } from './src/navigator/MenuLateralBasic';
import { MenuLateral } from './src/navigator/MenuLateral';

const App = () => {
    return (
        <NavigationContainer>
            {/* <StackNavigator/> */}
            {/* <MenuLateralBasic/> */}
            <MenuLateral/>
        </NavigationContainer>
    )
}

export default App;