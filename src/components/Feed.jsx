import React, { useEffect } from "react";
import { BASE_URL } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/FeedSlice";
import UserCard from "./userCard";

function Feed({ setAlertMessage, setAlertStatus }) {
  const dispatch = useDispatch();
  const dataFromStore = useSelector((store) => store.feed);

  const feedData = async () => {
    try {
      if (dataFromStore) return;
      const data = await fetch(BASE_URL + "/user/feed", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const result = await data.json();

      if (!data.ok) {
        throw new Error(result.message || "Error in getting feed!");
      }

      console.log(result);
      dispatch(addFeed(result.users[0]));
    } catch (error) {
      setAlertStatus("alert-error");
      setAlertMessage(error.message);
      console.error(error.message);
    }
  };

  useEffect(() => {
    feedData();
  }, []);

  return (
    dataFromStore && (
      <>
        <UserCard user={dataFromStore} />
      </>
    )
  );
}

export default Feed;
