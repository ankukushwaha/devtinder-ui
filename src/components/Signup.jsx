import React, { useState } from "react";
import { BASE_URL } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [FirstName, setFirstName] = useState("Simran");
  const [LastName, setLastName] = useState("Bharat");
  const [Email, setEmail] = useState("simran@gmail.com");
  const [password, setPassword] = useState("Simran@123");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleClick() {
    try {
      const response = await fetch(BASE_URL + "/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: FirstName,
          lastName: LastName,
          email: Email,
          password: password,
        }),
        credentials: "include",
      });

      
      const result = response.json();
      console.log(result);
      if (!response.ok) {
        throw new Error(result.message || "Error in signup!");
      }

      dispatch(addUser(result));
      navigate("/profile");
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="flex justify-center mt-5">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Signup</legend>

        <label className="label">First Name</label>
        <input
          type="text"
          className="input"
          placeholder="First Name"
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label className="label">Last Name</label>
        <input
          type="text"
          className="input"
          placeholder="Last Name"
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-neutral mt-4" onClick={handleClick}>
          Signup
        </button>

        <Link to="/login">Already signup then Login</Link>
      </fieldset>
    </div>
  );
}

export default Signup;
