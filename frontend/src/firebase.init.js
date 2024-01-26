
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHS3db9Sy1LAa0iLnXBGmhNAjV2BkoOxY",
  authDomain: "twitter-e0214.firebaseapp.com",
  projectId: "twitter-e0214",
  storageBucket: "twitter-e0214.appspot.com",
  messagingSenderId: "162198469584",
  appId: "1:162198469584:web:d95afd0051b707b20657d5",
  measurementId: "G-9P2F8DLS87"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;