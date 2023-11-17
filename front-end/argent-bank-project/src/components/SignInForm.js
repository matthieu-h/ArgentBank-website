import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../slice";
import { useNavigate } from "react-router-dom";
import { user } from "../routes";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("hidden");
  const loginObject = { email: email, password: password };
  const loginString = JSON.stringify(loginObject);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirection = () => {
    navigate(user);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: loginString,
    }).then(function (response) {
      response.json().then((tokenObject) => {
        if (response.ok) {
          const token = tokenObject.body.token;
          dispatch(setToken(token));
          redirection();
        } else {
          setMessage();
        }
      });
    });
  };

  return (
    <div className="main bg-dark">
      <div className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form className=".login-form" onSubmit={onSubmit}>
          <div className="input-wrapper">
            <p className="message" style={{ visibility: message }}>
              Incorrect email or password
            </p>
            <label htmlFor="email">Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" name="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
