import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



export const TabOneScreen = () => {
    const {top} = useSafeAreaInsets();

    useEffect(() => {
        console.log('TabOneScreen');
    }, []);
    

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: top + 20

            }}>
            <Text style={styles.title}>
                Icons
            </Text>
            <Text>
            <Icon name="rocket-outline" size={80} color={colors.primary} />
            <Icon name="albums-outline" size={80} color={colors.primary} />
            <Icon name="chatbubbles-outline" size={80} color={colors.primary} />
            <Icon name="person-outline" size={80} color={colors.primary} />
            <Icon name="chevron-up-circle-outline" size={80} color={colors.primary} />
            <Icon name="airplane-outline" size={80} color={colors.primary} />
            <Icon name="fast-food-outline" size={80} color={colors.primary} />
            <Icon name="musical-notes-outline" size={80} color={colors.primary} />
            </Text>
        </View>
    )
}
