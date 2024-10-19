import React from "react";
import Button from "./Button";

const Friend = ({ friend }) => {
  return (
    <>
      <li>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You Owe {friend.name} {Math.abs(friend.balance)}€
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            You Owe {friend.name} {Math.abs(friend.balance)}€
          </p>
        )}
        {friend.balance === 0 && <p>You Owe {friend.name}are even</p>}
        <Button>Select</Button>
      </li>
    </>
  );
};

export default Friend;
