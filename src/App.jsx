import React, {useState} from "react";
import Body from "./components/Body";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AppStore from "./utils/AppStore.js"
import Feed from "./components/Feed.jsx";
import { Provider } from 'react-redux'

function App() {
  const [imageURL, setImageUrl] = useState('');

  return (
    <Provider store={AppStore}>
      <BrowserRouter basename="/"> 
        <Routes>
          <Route path="/" element={<Body imageURL={imageURL}/>} >
            <Route path="/feed" element={<Feed />}/>
            <Route path="/login" element={<Login setImageUrl={setImageUrl}/>} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
