import React from "react";

function ProfileCard({firstName, lastName, age, about, imageUrl, gender}) {
  return (
    <div className=" my-2">
      <div className="card bg-base-300 w-96 shadow-sm ">
        <figure>
          <img src={imageUrl} alt={firstName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName}</h2>
          <p>{`${age} , ${gender}`}</p>
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
