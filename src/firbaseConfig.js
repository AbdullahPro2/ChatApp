import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDx7SwI79OijSXL0063JOtj_1y7ZY6ZWxY",
  authDomain: "chat-app-97bec.firebaseapp.com",
  projectId: "chat-app-97bec",
  storageBucket: "chat-app-97bec.appspot.com",
  messagingSenderId: "479076884260",
  appId: "1:479076884260:web:7bdd0d10cc01957f7e1db1",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const providerGoogle = new GoogleAuthProvider();
