import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SettingsScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top + 20
            }}>
            <Text style={styles.menuTexto}>
                SettingsScreen
            </Text>
        </View>
    )
}
