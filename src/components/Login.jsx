import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { addUser } from "../utils/UserSlice"
import { BASE_URL } from "../utils/Constant";

function Login() {

    const [email, setEmail] = useState("simran@gmail.com");
    const [password, setPassword] = useState("Simran@123");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function handleClick(){
        try{
            const data = await fetch(BASE_URL + "/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({email: email, password: password}),
                credentials: "include"
            });
            const result = await data.json();
            dispatch(addUser(result));
            return navigate("/feed");
        }
        catch(err){
            console.error(err.message);
        }
    }

  return (
    <div className="flex justify-center mt-5">
      <div className="card w-96 bg-base-100 card-xl shadow-sm bg-gray-100">
        <div className="card-body ">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <label>Email:  </label>
            <input className="bg-white" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:  </label>
            <input className="bg-white" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="card-actions mt-5">
            <button className="btn btn-primary" onClick={handleClick}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
