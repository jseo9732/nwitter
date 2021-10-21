import { dbService } from "fBase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react/cjs/react.development";

const Nweet = ({ nweetObj, isOwner }) => {
  // 삭제 기능
  const onDeleteClick = () => {
    const ok = window.confirm("정말 이 nweet을 삭제하시겠습니까?");
    if (ok) {
      deleteDoc(doc(dbService, `nweets/${nweetObj.id}`));
    }
  };

  // 수정 기능
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);
  // 수정 여부 변경 함수
  const toggleEditing = () => setEditing((prev) => !prev);

  // 데이터베이스에 저장 및 화면 표시 기능
  const onSubmit = (event) => {
    event.preventDefault();
    updateDoc(doc(dbService, `nweets/${nweetObj.id}`), {
      text: newNweet,
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };

  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your nweet"
              value={newNweet}
              required
              onChange={onChange}
            />
            <input type="submit" value="Update Nweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Nweet</button>
              <button onClick={toggleEditing}>Edit Nweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;
