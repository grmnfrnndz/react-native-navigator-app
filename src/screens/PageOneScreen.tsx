import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';



// interface Props extends StackScreenProps<any, any> {};
interface Props extends DrawerScreenProps<any, any> {};


export const PageOneScreen = ({navigation}: Props) => {


    useEffect(()=> {
        navigation.setOptions({
            headerLeft: () => <Button title='Menu' onPress={() => navigation.toggleDrawer()}/>
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
                    <Text style={styles.buttonBigText}>Person GERMAN DEV OPS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{...styles.buttonBig, backgroundColor: 'green'}}
                    onPress={() => navigation.navigate('personScreen', {id: 2, name: 'KAIRON'})}
                >
                    <Text style={styles.buttonBigText}>Person KAIRON</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
