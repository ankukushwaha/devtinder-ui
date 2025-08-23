import React, { useEffect } from "react";
import { BASE_URL } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/RequestSlice";

function Requests({ setAlertMessage, setAlertStatus }) {
  const requestsFromStore = useSelector((store) => store.request);
  const dispatch = useDispatch();

  async function handleClick(status, id) {
    try {
      const response = await fetch(
        BASE_URL + "/request/review/" + status + "/" + id,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Error in reviewing requests!");
      }

      dispatch(removeRequest(id));
      setAlertStatus("alert-success");
      setAlertMessage(`${status} successfully!`);
    } catch (error) {
      setAlertStatus("alert-error");
      setAlertMessage(error.message);
      console.error(error.message);
    }
  }

  async function fetchRequests() {
    try {
      if (requestsFromStore) return;
      const response = await fetch(BASE_URL + "/user/request/received", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Error in fetching requests!");
      }

      dispatch(addRequest(result));
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requestsFromStore) return;
  if (requestsFromStore.length === 0)
    return (
      <h1 className="flex justify-center my-20 font-bold text-3xl">
        No Requests Found.
      </h1>
    );

  return (
    <>
      <div className="flex">
        {requestsFromStore &&
          requestsFromStore.length > 0 &&
          requestsFromStore.map((item) => {
            const {
              _id,
              firstName,
              lastName,
              imageUrl,
              age,
              skills,
              about,
              gender,
            } = item;
            return (
              <div key={_id} className="card bg-base-300 w-96 shadow-sm m-5">
                <figure className="px-10 pt-10">
                  <img src={imageUrl} alt={firstName} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{firstName + " " + lastName}</h2>
                  <p>{age + " " + gender}</p>
                  <p>{about}</p>
                  <div className="card-actions">
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleClick("accepted", _id)}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleClick("rejected", _id)}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Requests;
