import React from "react";
import { BASE_URL } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/FeedSlice";

function UserCard({user}) {
  const { _id, firstName, lastName, imageUrl, age, skills, about, gender } = user;
  const dispatch = useDispatch();

  async function handleClick(status, id){
    try {
      const response = await fetch(BASE_URL + "/request/send/" + status + "/" + id,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include"
      });

      const result = await response.json();

      if(!response.ok){
        throw new Error(result.message || "Error in sending or ignoring requests!");
      }

      dispatch(removeFeed(_id));
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div key={_id} className="flex justify-center my-2">
    <div className="card bg-base-300 w-96 shadow-sm ">
      <figure>
        <img
          src={imageUrl}
          alt={firstName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{age + " " + gender}</p>
        <p>
          {about}
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={() => handleClick("ignored", _id)}>Reject</button>
          <button className="btn btn-secondary" onClick={() => handleClick("interested", _id)}>Interested</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default UserCard;
