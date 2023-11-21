import React from "react";
// import { useSelector } from "react-redux/es/hooks/useSelector";
// import { useDispatch } from "react-redux";
// import { setFirstName, setUserName, setUserId } from "../profileSlice";
// import { setLastName } from "../profileSlice";
import { useNavigate } from "react-router-dom";
import { userEdit } from "../routes";

const UserName = ({ firstName, lastName }) => {
  // const tokenRed = useSelector((state) => state.tokener.token);
  // const dispatch = useDispatch();

  // fetch("http://localhost:3001/api/v1/user/profile", {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${tokenRed}`,
  //     "Content-Type": "application/json",
  //   },
  // }).then(function (response) {
  //   response
  //     .json()
  //     .then((userProfile) => {
  //       const firstName = userProfile.body.firstName;
  //       dispatch(setFirstName(firstName));
  //       const lastName = userProfile.body.lastName;
  //       dispatch(setLastName(lastName));
  //       const userName = userProfile.body.userName;
  //       dispatch(setUserName(userName));
  //       const id = userProfile.body.id;
  //       dispatch(setUserId(id));
  //     })
  //     .catch((error) => console.error(error));
  // });
  // const firstName = useSelector((state) => state.firstName.firstName);
  // const lastName = useSelector((state) => state.lastName.lastName);

  const navigate = useNavigate();
  const editName = (e) => {
    navigate(userEdit);
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName} {lastName} !
      </h1>
      <button className="edit-button" onClick={editName}>
        Edit Name
      </button>
    </div>
  );
};

export default UserName;
