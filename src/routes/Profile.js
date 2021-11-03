import React, { useEffect } from "react";
import { authService, dbService } from "fBase";
import { signOut, updateProfile } from "firebase/auth";
import { useHistory } from "react-router";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { useState } from "react";

const Profile = ({ refreshUser, userObj }) => {
  const auth = authService;
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const onLogOutClick = () => {
    signOut(auth);
    history.push("/");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await updateProfile(authService.currentUser, {
        displayName: newDisplayName,
      });
      refreshUser();
    }
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
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={newDisplayName}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
export default Profile;
