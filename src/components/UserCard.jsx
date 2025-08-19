import React from "react";

function UserCard({user}) {
  return (
    <div className="flex justify-center my-2">
    <div className="card bg-base-300 w-96 shadow-sm ">
      <figure>
        <img
          src={user.imageUrl}
          alt={user.firstName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user.firstName}</h2>
        <p>{user.age}</p>
        <p>
          {user.about}
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Reject</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default UserCard;
