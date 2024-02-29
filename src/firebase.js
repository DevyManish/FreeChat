import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const app = firebase.initializeApp({
  // config
  apiKey: "AIzaSyAl10uwZs7GcioCCf_Yuog-e0JWqg9abY0",
  authDomain: "freechat-96bdb.firebaseapp.com",
  projectId: "freechat-96bdb",
  storageBucket: "freechat-96bdb.appspot.com",
  messagingSenderId: "260286383808",
  appId: "1:260286383808:web:1e7e8e2f8778af91884f25",
  measurementId: "G-HT43Y56X9K",
});

const auth = firebase.auth();

const getUser = ()=> {
  const [user] = useAuthState(auth);
  return user;
}

// export default user;
export { app, getUser, auth, firebase };
