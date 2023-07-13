import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';


export const AlbumsScreen = () => {

    const {authState, logout} = useContext(AuthContext);

    return (
        <View style={styles.globalMargin} >
            <Text style={{color: 'red'}}>{JSON.stringify(authState, null, 4)}</Text>
            {
            
            (authState.isLoggedIn)
            &&
            <TouchableOpacity
                onPress={logout}
            >
                <Text style={{color: 'red'}}><Icon name='person-outline' size={100} color={colors.primary} /></Text>
                </TouchableOpacity>
            }
        </View>
    )
}


