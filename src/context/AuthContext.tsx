import React, { useReducer } from "react";
import { createContext } from "react";
import { authReducer } from "./authReducer";

// difine type
export interface AuthState {
    isLoggedIn: boolean,
    username?: string,
    favoriteIcon?: string
}


// initial state
export const authInitialState:AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

// define context
export interface AuthContextProps {
    authState: AuthState,
    signIn: () => void,
    logout: () => void,
    changeFavIcon: (iconName:string) => void,
    changeUsername: (username:string) => void,
}


// create context
export const AuthContext = createContext({} as AuthContextProps)



export const AuthProvider = ({children}: any) => {


    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({type: 'signIn'});
    }
    
    const changeFavIcon = (iconName:string) => {
        dispatch({type: 'changeFavIcon', payload: iconName});
    }

    const changeUsername = (username:string) => {
        dispatch({type: 'changeUsername', payload: username});
    }

    const logout = () => {
        dispatch({type: 'logout', payload: {isLoggedIn: false, username: undefined, favoriteIcon: undefined}});
    }


    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavIcon,
            logout,
            changeUsername,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
