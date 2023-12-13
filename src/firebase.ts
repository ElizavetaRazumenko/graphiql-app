import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  Auth,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  Firestore,
} from 'firebase/firestore';

const firebaseConfig: Record<string, string> = {
  apiKey: 'AIzaSyAfJsWiweRhwctw9ueSztf5MQ93sLX4V4I',
  authDomain: 'lotm-graphiql-rsschool.firebaseapp.com',
  projectId: 'lotm-graphiql-rsschool',
  storageBucket: 'lotm-graphiql-rsschool.appspot.com',
  messagingSenderId: '275566810244',
  appId: '1:275566810244:web:aa7ad5c92285617260ded1',
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

export const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => {
  signOut(auth);
};
