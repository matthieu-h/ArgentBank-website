import React from "react";
import SignInForm from "../components/SignInForm";
import Header from "../components/Header";

const SignIn = () => {
  return (
    <div>
      <Header connexion="Sign in" />
      <SignInForm />
    </div>
  );
};

export default SignIn;
