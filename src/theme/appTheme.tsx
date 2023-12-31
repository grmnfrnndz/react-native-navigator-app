import { StyleSheet } from "react-native";


export const colors = {
    primary: '#5856D6',
    secundary: '#7FB3D5'
}



export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    buttonBig: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 10,
    },
    buttonBigText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    avatarContainer: {
       alignItems: 'center',
       marginTop: 20,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 30,
        // alignItems: 'center'
    },
    menuTexto: {
        color: 'black',
        fontSize: 20

    },
    menuButton: {
        marginVertical: 10,
        flexDirection: 'row'
    }
});