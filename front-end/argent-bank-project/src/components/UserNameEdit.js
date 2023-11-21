import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../profileSlice";

const UserNameEdit = () => {
  const dispatch = useDispatch();

  const userName = useSelector((state) => state.userName.userName);
  console.log(userName);
  const firstName = useSelector((state) => state.firstName.firstName);
  const lastName = useSelector((state) => state.lastName.lastName);
  const tokenRed = useSelector((state) => state.tokener.token);

  const [userNameState, setUserNameState] = useState(userName);

  const saveUserName = (e) => {
    setUserNameState(e.target.value);
    console.log(userNameState);
  };

  const userNameObject = { userName: userNameState };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserName(userNameState));
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${tokenRed}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userNameObject),
    }).then(function (response) {
      response.json().then((userObject) => {
        if (response.ok) {
          console.log(userObject);
        } else {
          console.log("pas ok");
        }
      });
    });
  };

  const cancel = (e) => {
    e.preventDefault();
    console.log("cancel");
  };

  return (
    <div className="header">
      <h1>Edit user info</h1>
      <form className=".login-form" onSubmit={onSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            defaultValue={userName}
            onChange={saveUserName}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            disabled="disabled"
            id="firstname"
            name="firstname"
            defaultValue={firstName}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            disabled="disabled"
            id="lastname"
            name="lastname"
            defaultValue={lastName}
          />
        </div>
        <button className="edit-button">Save</button>
        <button className="edit-button" onClick={cancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UserNameEdit;
