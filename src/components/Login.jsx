import React, { useState } from "react";

function Login({setImageUrl}) {

    const [email, setEmail] = useState("simran@gmail.com");
    const [password, setPassword] = useState("Simran@123");

    async function handleClick(){
        try{
            const data = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({email: email, password: password})
            });
            const result = await data.json();
            setImageUrl(result.imageUrl);
            console.log(result);
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
