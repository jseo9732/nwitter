import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { authService } from "fBase";
import React from "react";
import AuthForm from "components/AuthForm";

const Auth = () => {
  const auth = authService;

  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      // 깃허브 같은 다른 소셜 로그인 이용하려면 이런 식으로 추가한다.
    }
    await signInWithPopup(auth, provider);
  };

  return (
    <div>
      <AuthForm />
      <div>
        <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
      </div>
    </div>
  );
};
export default Auth;
