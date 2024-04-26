import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        /* Use the above only to have the google credentials and the access token. for this example is not
        necesary to use the google credentials */

        // const credentials = GoogleAuthProvider.credentialFromResult(result)

        /* Here we can get the credntials and the access token of firebase. In this example
        it is mandatory to use it */
        const { displayName, email, photoURL, uid } = result.user

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