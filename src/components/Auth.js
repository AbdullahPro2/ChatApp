import React from "react";
import { auth, providerGoogle } from "../firbaseConfig";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();
function Auth({ setIsAuth }) {
  async function signInWithGoogle() {
    try {
      const result = await signInWithPopup(auth, providerGoogle);
      cookies.set("Auth-Token", result.user.refreshToken);
      setIsAuth(true);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="auth">
      <p>Sign In With Google To Continue</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
}

export default Auth;
