// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB1SdeGPmmW1VP8VEC_a4kqA0-3w8u_q9U",
  authDomain: "proyectofinal-minerdo.firebaseapp.com",
  projectId: "proyectofinal-minerdo",
  storageBucket: "proyectofinal-minerdo.appspot.com",
  messagingSenderId: "977767816490",
  appId: "1:977767816490:web:335daeaa50f170d1191253"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
