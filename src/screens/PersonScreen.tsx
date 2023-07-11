import React, { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';

import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';


// interface RouterParams {
//     id: number,
//     name: string,
// }


interface Props extends StackScreenProps<RootStackParams, 'personScreen'> {};


export const PersonScreen = ({navigation, route}: Props) => {

    // const params = route.params as RouterParams;
    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                
                {
                    JSON.stringify(params, null, 3)
                }

            </Text>
        </View>
    )
}
