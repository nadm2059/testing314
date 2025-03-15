// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCmhXCHNxQcJHWAMhQaYB5IVQT66rrZwr4",
  authDomain: "testagain-2b9e0.firebaseapp.com",
  projectId: "testagain-2b9e0",
  storageBucket: "testagain-2b9e0.firebasestorage.app",
  messagingSenderId: "87750955396",
  appId: "1:87750955396:web:8a09c76cd356281f180dd1",
  measurementId: "G-NJ2XF6V1SB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);

// Example of using Firebase Realtime Database or other services
// Import the database service:
import { getDatabase, ref, set } from "firebase/database";

// Get a reference to the database and write data
const db = getDatabase(app);
set(ref(db, 'users/1'), {
  username: "John Doe",
  email: "john@example.com"
});
