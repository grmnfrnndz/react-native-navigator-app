import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

import { styles } from '../theme/appTheme';



export const PageTwoScreen = () => {

    const navigator = useNavigation();

    useEffect(()=> {
        navigator.setOptions({
            title: 'LEPMAH',
            headerBackTitle: '',
        });
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={{color: 'black', ...styles.title}}>PageTwoScreen</Text>

            <Button
                title='Go to page Three'
                onPress={() => navigator.navigate('pageThree')}
            />
            <Button
                title='Go to page One'
                onPress={() => navigator.navigate('pageOne')}
            />
        </View>
    )
}
