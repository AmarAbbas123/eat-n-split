import React from "react";
import Friend from "./Friend";

const FriendList = ({ friends, onSelection, selectedFriend }) => {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            selectedFriend={selectedFriend}
            onSelection={onSelection}
          />
        ))}
      </ul>
    </>
  );
};

export default FriendList;
