// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlwZBAo_jKiq0uvzUToyvkQSLDPOjpmyE",
  authDomain: "customer-support-ai-2702d.firebaseapp.com",
  projectId: "customer-support-ai-2702d",
  storageBucket: "customer-support-ai-2702d.appspot.com",
  messagingSenderId: "137006730586",
  appId: "1:137006730586:web:04f4636fe0e27f225ab763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };