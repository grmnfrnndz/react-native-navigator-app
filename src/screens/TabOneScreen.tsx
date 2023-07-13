import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';



export const TabOneScreen = () => {
    const {top} = useSafeAreaInsets();

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: top + 20

            }}>
            <Text style={styles.title}>
                Icons
            </Text>
            <Text>
            <TouchableIcon iconName="rocket-outline"/>
            <TouchableIcon iconName="albums-outline"/>
            <TouchableIcon iconName="chatbubbles-outline"/>
            <TouchableIcon iconName="person-outline"/>
            <TouchableIcon iconName="chevron-up-circle-outline"/>
            <TouchableIcon iconName="airplane-outline"/>
            <TouchableIcon iconName="fast-food-outline"/>
            <TouchableIcon iconName="musical-notes-outline"/>
            </Text>
        </View>
    )
}
