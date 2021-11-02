import React, { useEffect } from "react";
import { authService, dbService } from "fBase";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router";
import { collection, getDocs, query, where } from "@firebase/firestore";

const Profile = ({ userObj }) => {
  const auth = authService;
  const history = useHistory();

  const onLogOutClick = () => {
    signOut(auth);
    history.push("/");
  };
  const getMyNweets = async () => {
    const nweets = query(
      collection(dbService, "nweets"),
      where("creatorId", "==", userObj.uid)
    );
    const querySnapshot = await getDocs(nweets);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  };

  useEffect(() => {
    getMyNweets();
  });

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
export default Profile;
