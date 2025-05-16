// firebase/index.ts — simplified Firebase init using in-memory persistence
import { initializeApp } from 'firebase/app';

// Web SDK auth + in-memory persistence (no missing react-native entrypoint)
import {
  getAuth,
  setPersistence,
  inMemoryPersistence
} from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';
import { getStorage }   from 'firebase/storage';

// FIREBASE CONFIG 
const firebaseConfig = {
    apiKey: "AIzaSyDjjHK2WJzJ-tJJeJDBwdRUMjZ2Qd03Us8",
    authDomain: "myburger-13ddb.firebaseapp.com",
    projectId: "myburger-13ddb",
    storageBucket: "myburger-13ddb.firebasestorage.app",
    messagingSenderId: "1094901056785",
    appId: "1:1094901056785:web:0edf65f7f3b81bfde4b8b0"
  };

// Initialize core app
const app = initializeApp(firebaseConfig);

// Initialize Auth and set in-memory persistence
const auth = getAuth(app);
setPersistence(auth, inMemoryPersistence);

// Initialize Firestore and Storage
const db      = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
