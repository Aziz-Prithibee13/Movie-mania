// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtBKLnyXAD94dNH4W8aEKXocc2inbbi6s",
  authDomain: "movie-mania-cf6d3.firebaseapp.com",
  projectId: "movie-mania-cf6d3",
  storageBucket: "movie-mania-cf6d3.appspot.com",
  messagingSenderId: "862912079367",
  appId: "1:862912079367:web:02184dc101f181ed8baca2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;
