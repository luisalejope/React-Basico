import { loginUserWithEmailAndPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        console.log(email, password)
    }
}


export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials())

        const result = await signInWithGoogle();

        if(!result.ok) return dispatch(logout({errorMessage: result.errorMessage}));

        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, name}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials())

        const result = await registerUserWithEmailPassword({email, password, name});

        if(!result.ok) return dispatch(logout({errorMessage: result.errorMessage}));

        dispatch(login(result))

    }
}


export const startLoginUserWithEmailPassword = ({email, password}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());

        const result = await loginUserWithEmailAndPassword({email, password});

        if(!result.ok) return dispatch(logout({errorMessage: result.errorMessage}));

        dispatch(login(result))

    }
}

export const startLogoutFromFirebase = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());

        await logoutFirebase();

        dispatch(logout())

    }
}
