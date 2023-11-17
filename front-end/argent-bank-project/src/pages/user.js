import React from "react";
import Account from "../components/Account";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { unSetToken } from "../slice";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../src/routes";
import UserName from "../components/UserName";

// import { useParams } from "react-router-dom";

const User = () => {
  // let { userId } = useParams();
  // const userObject = data.find((e) => e.id === userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = (e) => {
    dispatch(unSetToken());
    navigate(signIn);
  };

  return (
    <div>
      <Header connexion="Sign out" onclick={logout} />
      <div className="main bg-dark">
        <UserName />
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
