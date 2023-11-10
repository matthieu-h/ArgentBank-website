import React from "react";
import Account from "../components/Account";
import Header from "../components/Header";
// import { useParams } from "react-router-dom";

const User = () => {
  // let { userId } = useParams();
  // const userObject = data.find((e) => e.id === userId);

  return (
    <div>
      <Header connexion="Sign out" onClick = {}/>
      <div className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="2,082.79"
          amountDescription="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="10,928.42"
          amountDescription="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="184.30"
          amountDescription="Current Balance"
        />
      </div>
    </div>
  );
};

export default User;
