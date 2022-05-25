import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD0RtuFCqpv_EFi9YWxZAq-DcRdR3jz-e4",
    authDomain: "magazin-paine.firebaseapp.com",
    projectId: "magazin-paine",
    storageBucket: "magazin-paine.appspot.com",
    messagingSenderId: "674519720460",
    appId: "1:674519720460:web:c49d80bcb5bcf16b62c429"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
        prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
                console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  
  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createAuthUserWithEmailAndPassword(auth, email, password);
  };