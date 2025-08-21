import React from "react";
import { useSelector } from "react-redux";
import Editform from "./EditForm";

function Profile({setAlertMessage, setAlertStatus}) {
  const userFromStore = useSelector((store) => store.user);
  return userFromStore && (
    <>
        <Editform user={userFromStore} setAlertMessage={setAlertMessage} setAlertStatus={setAlertStatus}/>
    </>
  );
}

export default Profile;
