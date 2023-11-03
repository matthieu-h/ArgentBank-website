import React, { useReducer } from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    case "newEmail":
      return { ...state, email: action.payload };
    case "newPassword":
      return { ...state, password: action.payload };
    default:
      return { ...state };
  }
};

const SignInForm = () => {
  const [state, dispatch] = useReducer(reducer, { email: "", password: "" });

  return (
    <div className="main bg-dark">
      <div className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form className=".login-form">
          <div className="input-wrapper">
            {/* <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" /> */}
            <label htmlFor="email">Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "newEmail", payload: e.target.value })
              }
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={state.password}
              onChange={(e) =>
                dispatch({ type: "newPassword", payload: e.target.value })
              }
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
