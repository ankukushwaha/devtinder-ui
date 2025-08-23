import React, { useEffect } from "react";
import { BASE_URL } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addFriend } from "../utils/FriendSlice";

function Friends() {
  const friendsFromStore = useSelector((store) => store.friends);
  const dispatch = useDispatch();

  async function fetchConnections() {
    try {
      if (friendsFromStore) return;
      const response = await fetch(BASE_URL + "/user/connections", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Error in getting connections!");
      }

      dispatch(addFriend(result));
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!friendsFromStore) return;
  if (friendsFromStore.length === 0)
    return (
      <h1 className="flex justify-center my-20 font-bold text-3xl">
        No Connections Found.
      </h1>
    );

  return (
    <>
    <div className="flex">
      {friendsFromStore &&
        friendsFromStore.length > 0 &&
        friendsFromStore.map((item) => {
          const { _id, firstName, lastName, imageUrl, age, skills, about, gender } =
            item;
          return (
            <div key={_id} className="card bg-base-300 w-96 shadow-sm m-5">
              <figure className="px-10 pt-10">
                <img
                  src={imageUrl}
                  alt={firstName}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                <p>{age + " " + gender}</p>
                <p>
                 {about}
                </p>
              </div>
            </div>
          );
        })}
        </div>
    </>
  );
}

export default Friends;
