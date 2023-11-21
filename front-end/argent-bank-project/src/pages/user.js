import React from "react";
import Account from "../components/Account";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { unSetToken } from "../slice";
import { useNavigate, useParams } from "react-router-dom";
import { signIn } from "../../src/routes";
import UserName from "../components/UserName";
import { useSelector } from "react-redux/es/hooks/useSelector";

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const firstName = useSelector((state) => state.firstName.firstName);
  const lastName = useSelector((state) => state.lastName.lastName);

  const id = useSelector((state) => state.id.id);
  console.log(id);

  let { userId } = useParams();
  console.log(userId);

  const logout = (e) => {
    dispatch(unSetToken());
    navigate(signIn);
  };

  return (
    <div>
      <Header connexion="Sign out" onclick={logout} />
      <div className="main bg-dark">
        <UserName firstName={firstName} lastName={lastName} />
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
