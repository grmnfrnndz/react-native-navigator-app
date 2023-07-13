import { AuthState } from "./AuthContext";


type AuthAction = 
    | {type: 'signIn'}
    | {type: 'changeFavIcon', payload: string}
    | {type: 'logout', payload: AuthState}
    | {type: 'changeUsername', payload: string};


export const authReducer = (state:AuthState, action: AuthAction): AuthState => {

    switch(action.type) {
        case 'signIn':
            return {...state, isLoggedIn: true, username: 'not-username-yet'}
        case 'changeUsername':
            return {...state, isLoggedIn: true, username: action.payload}
        case 'changeFavIcon':
            return {...state, favoriteIcon: action.payload}
        case 'logout':
            return {...state, ...action.payload}
        default:
            return state;
    }
}