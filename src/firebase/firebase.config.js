// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr7w9-rkmfGZPxEWv0beEEH4jjck9PPGs",
  authDomain: "my-toytopia-app.firebaseapp.com",
  projectId: "my-toytopia-app",
  storageBucket: "my-toytopia-app.firebasestorage.app",
  messagingSenderId: "1007184198221",
  appId: "1:1007184198221:web:a432093843324139f6ba04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app