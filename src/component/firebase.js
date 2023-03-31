import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBEO66I3i5EbFLNhRwrkt5AMiX7XtqI_FA",
  authDomain: "lesson-7-auth.firebaseapp.com",
  projectId: "lesson-7-auth",
  storageBucket: "lesson-7-auth.appspot.com",
  messagingSenderId: "601882635",
  appId: "1:601882635:web:26587af808d61407be870e",
});

const auth = app.auth();
export { auth };
export default app;
