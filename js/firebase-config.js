// Family Child Safety
// Firebase configuration

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAEYRaVJY79p6Wl_LrsGcMEzF7gcK16jc",
  authDomain: "family-child-safety.firebaseapp.com",
  projectId: "family-child-safety",
  storageBucket: "family-child-safety.firebasestorage.app",
  messagingSenderId: "614945439937",
  appId: "1:614945439937:web:c1fc897a0f68f6808f9440",
  measurementId: "G-KTVMHYPLTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication
const auth = getAuth(app);

// Firestore Database
const db = getFirestore(app);

export { app, auth, db };
