import React, { useState } from "react";

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case "newEmail":
//       return { ...state, email: action.payload };
//     case "newPassword":
//       return { ...state, password: action.payload };
//     default:
//       return { ...state };
//   }
// };

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginObject = { email: email, password: password };
  const loginString = JSON.stringify(loginObject);
  const onSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: loginString,
    }).then(function (response) {
      response.json().then((token) => {
        if (response.ok) {
          console.log(token.body.token);
        } else {
          console.log("bad");
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
            {/* <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" /> */}
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
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
