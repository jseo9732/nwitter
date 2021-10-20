import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router";

const Profile = () => {
  const auth = getAuth();
  const history = useHistory();

  const onLogOutClick = () => {
    signOut(auth);
    history.push("/");
  };

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
export default Profile;
