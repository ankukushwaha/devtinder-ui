import React from "react";
import { useSelector } from "react-redux";
import Editform from "./EditForm";

function Profile() {
  const userFromStore = useSelector((store) => store.user);
  return userFromStore && (
    <>
        <Editform user={userFromStore} />
    </>
  );
}

export default Profile;
