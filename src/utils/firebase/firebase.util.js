import { initializeApp } from 'firebase/app';
import {
    getAuth, signInWithRedirect, signInWithPopup, signOut,
    GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyCCVezGvjZr6OEpxnvwxAMFQyjinb6UsOY",
    authDomain: "crwn-clothing-web-app-791c7.firebaseapp.com",
    projectId: "crwn-clothing-web-app-791c7",
    storageBucket: "crwn-clothing-web-app-791c7.appspot.com",
    messagingSenderId: "862169107891",
    appId: "1:862169107891:web:7d93e28ec44bb5d80e0fc6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGoolglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore()

export const createUserDocFromAuth = async (
    userAuth,
    additionalInformation = {}) => {


    if (!userAuth) return

    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (err) {
            console.log('Error creating the user', err.message);
        }
    }
    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)


