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

      dispatch(addFeed(result.users));
    } catch (error) {
      setAlertStatus("alert-error");
      setAlertMessage(error.message);
      console.error(error.message);
    }
  };

  useEffect(() => {
    feedData();
  }, []);

  if(!dataFromStore) return;
  if(dataFromStore.length === 0) return (
      <h1 className="flex justify-center my-20 font-bold text-3xl">
        No Users Found.
      </h1>
  );


  return (
    dataFromStore && (
      <>
        <UserCard user={dataFromStore[0]} />
      </>
    )
  );
}

export default Feed;
