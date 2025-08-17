import React, {useState} from "react";
import Body from "./components/Body";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout.jsx";
import AppStore from "./utils/AppStore.js"
import Feed from "./components/Feed.jsx";
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={AppStore}>
      <BrowserRouter basename="/"> 
        <Routes>
          <Route path="/" element={<Body />} >
            <Route path="/feed" element={<Feed />}/>
            <Route path="/logout" element={<Logout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
