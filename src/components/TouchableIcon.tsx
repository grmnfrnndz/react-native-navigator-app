import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

interface Props {
    iconName: string,
    action?: () => void
}


export const TouchableIcon = ({iconName}:Props) => {

    const {changeFavIcon} = useContext(AuthContext);



    return (
        <TouchableOpacity
            onPress={()=> changeFavIcon(iconName)}
        >
            <Icon name={iconName} size={80} color={colors.primary} />
        </TouchableOpacity>
    )
}
