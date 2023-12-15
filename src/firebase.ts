import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  Auth,
  UserCredential,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  Firestore,
} from 'firebase/firestore';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { AuthActionHook } from 'react-firebase-hooks/auth/dist/auth/types';

const firebaseConfig: Record<string, string> = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);

export const logInWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
};

export type RegisterCallback = (
  name: string,
  email: string,
  password: string,
) => Promise<void>;

export const useRegisterWithEmailAndPassword =
  (): AuthActionHook<RegisterCallback> => {
    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth);
    const registerWithEmailAndPassword: RegisterCallback = async (
      name: string,
      email: string,
      password: string,
    ): Promise<void> => {
      const res: UserCredential | undefined =
        await createUserWithEmailAndPassword(email, password);
      if (res) {
        await addDoc(collection(db, 'users'), {
          uid: res.user.uid,
          name,
          authProvider: 'local',
          email,
        });
      }
    };

    return [registerWithEmailAndPassword, user, loading, error];
  };

export const logout = () => {
  signOut(auth);
};
