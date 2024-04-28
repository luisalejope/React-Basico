import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const resp = await signInWithPopup(FirebaseAuth, googleProvider);
        /* Use the above only to have the google credentials and the access token. for this example is not
        necesary to use the google credentials */

        // const credentials = GoogleAuthProvider.credentialFromResult(result)

        /* Here we can get the credntials and the access token of firebase. In this example
        it is mandatory to use it */
        const { displayName, email, photoURL, uid } = resp.user

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {

        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage,
        }
    }
}


export const registerUserWithEmailPassword = async ({ email, password, name }) => {
    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

        const { photoURL, uid } = resp.user

        await updateProfile(FirebaseAuth.currentUser, {displayName: name});

        return {
            ok: true,
            name,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        return {
            ok: false,
            errorCode: error.code,
            errorMessage: error.message,
        }
    }
}

export const loginUserWithEmailAndPassword = async ({ email, password }) => {
    try {

        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);

        const { displayName, photoURL, uid } = resp.user
        

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        return {
            ok: false,
            errorCode: error.code,
            errorMessage: error.message,
        }
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut()
}