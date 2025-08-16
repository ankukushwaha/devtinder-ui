import React, {useState} from "react";
import Body from "./components/Body";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
  const [imageURL, setImageUrl] = useState('');

  return (
    <>
    <BrowserRouter basename="/"> 
      <Routes>
        <Route path="/" element={<Body imageURL={imageURL}/>} >
          <Route path="/login" element={<Login setImageUrl={setImageUrl}/>} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
