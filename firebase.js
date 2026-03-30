import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  onValue,
  off,
  remove,
  push,
  query,
  orderByChild,
  limitToLast,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBAAnZP5J_RsTF-puLIkloRT6pyS3TgtAM",
  authDomain: "loup-garou-en-ligne-32f5b.firebaseapp.com",
  databaseURL:
    "https://loup-garou-en-ligne-32f5b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "loup-garou-en-ligne-32f5b",
  storageBucket: "loup-garou-en-ligne-32f5b.firebasestorage.app",
  messagingSenderId: "536792759140",
  appId: "1:536792759140:web:aefc9cf5e0b271204b9871",
  measurementId: "G-PXYYLDHLNS",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export {
  db,
  auth,
  ref,
  set,
  get,
  update,
  onValue,
  off,
  remove,
  push,
  query,
  orderByChild,
  limitToLast,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
};
