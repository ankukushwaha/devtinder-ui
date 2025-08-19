import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { BASE_URL } from "../utils/Constant";

function Login() {
  const [email, setEmail] = useState("simran@gmail.com");
  const [password, setPassword] = useState("Simran@123");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleClick() {
    try {
      const data = await fetch(BASE_URL + "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
        credentials: "include",
      });
      const result = await data.json();
      dispatch(addUser(result));
      return navigate("/feed");
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className="flex justify-center mt-5">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={email}
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
          Login
        </button>
      </fieldset>
    </div>
  );
}

export default Login;
