import React from "react";
import FriendList from "./Components/FriendList";
import FormAddFriend from "./Components/FormAddFriend";
import Button from "./Components/Button";
import FormSplitBill from "./Components/FormSplitBill";

function App() {
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList />

          <FormAddFriend />
          <Button>Add Friend</Button>
        </div>
        <FormSplitBill />
      </div>
    </>
  );
}

export default App;
