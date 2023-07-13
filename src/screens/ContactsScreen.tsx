import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { colors, styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';


export const ContactsScreen = () => {

    const {authState, signIn} = useContext(AuthContext);

    return (
        <View style={styles.globalMargin} >
            <Text style={{color: 'red'}}>{JSON.stringify(authState, null, 4)}</Text>
            {
            
            (!authState.isLoggedIn)
            &&
            <TouchableOpacity
                onPress={signIn}
            >
                <Text style={{color: 'red'}}><Icon name='person-outline' size={100} color={colors.primary} /></Text>
                </TouchableOpacity>
            }
        </View>
    )
}
