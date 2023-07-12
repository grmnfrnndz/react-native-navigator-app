import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { DrawerScreenProps } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import { colors, styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';




// interface Props extends StackScreenProps<any, any> {};
interface Props extends DrawerScreenProps<any, any> {};


export const PageOneScreen = ({navigation}: Props) => {


    const navagate = () => {
        return (
            <TouchableOpacity 
                    style={{...styles.menuButton, marginLeft: 10}}
                    onPress={() => navigation.toggleDrawer()}
                >
                    <Icon name="rocket-outline" size={25} color={colors.primary} /><Text style={styles.menuTexto}>Menu</Text>
                </TouchableOpacity>
        )
    }


    useEffect(()=> {
        navigation.setOptions({
            // headerLeft: () => <Button title='Menu' onPress={() => navigation.toggleDrawer()}/>
            headerLeft: navagate
        });
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={{color: 'black', ...styles.title}}>PageOneScreen</Text>

            <Button
                title='Go to page two'
                onPress={() => navigation.navigate('pageTwo')}
            />
            
            {/* <Button title='Go to Person' onPress={() => navigation.navigate('personScreen')}/> */}

            <Text style={{marginVertical: 10, fontSize: 30}}>Navigate with args</Text>

            <View
                style={{flexDirection: 'row'}}
            >

                <TouchableOpacity style={{...styles.buttonBig, backgroundColor: 'blue'}}
                    onPress={() => navigation.navigate('personScreen', {id: 1, name: 'GERMANDEVOPS'})}
                >
                    <Icon name="car-sport-outline" size={25} color={colors.primary} /><Text style={styles.buttonBigText}>GERMAN DEV OPS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{...styles.buttonBig, backgroundColor: 'green'}}
                    onPress={() => navigation.navigate('personScreen', {id: 2, name: 'KAIRON'})}
                >
                    <Icon name="logo-electron" size={25} color={colors.primary} /><Text style={styles.buttonBigText}>KAIRON</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
