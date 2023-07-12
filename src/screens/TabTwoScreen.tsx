import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export const TabTwoScreen = () => {

    useEffect(() => {
        console.log('TabTwoScreen');
    }, []);

    return (
        <View>
            <Text>
                TabTwoScreen
            </Text>
        </View>
    )
}
