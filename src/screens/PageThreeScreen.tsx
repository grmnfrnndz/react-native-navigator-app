import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';

import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<any, any> {};


export const PageThreeScreen = ({navigation}: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={{color: 'black', ...styles.title}}>PageThreeScreen</Text>

            <Button title='Go back'  onPress={() => navigation.pop()}/>
            <Button title='Go home'  onPress={() => navigation.popToTop()}/>
        </View>
    )
}
