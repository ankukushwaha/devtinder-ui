import React, { useEffect, useState } from "react";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AppStore from "./utils/AppStore.js";
import Feed from "./components/Feed.jsx";
import Profile from "./components/Profile.jsx";
import { Provider } from "react-redux";

function App() {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertStatus, setAlertStatus] = useState("");

  setInterval(() => {
    setAlertMessage("");
  }, 3000);

  return (
    <Provider store={AppStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route
            path="/"
            element={
              <Body
                alertMessage={alertMessage}
                alertStatus={alertStatus}
              />
            }
          >
            <Route
              path="/feed"
              element={
                <Feed
                  setAlertMessage={setAlertMessage}
                  setAlertStatus={setAlertStatus}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  setAlertMessage={setAlertMessage}
                  setAlertStatus={setAlertStatus}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  setAlertMessage={setAlertMessage}
                  setAlertStatus={setAlertStatus}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Signup
                  setAlertMessage={setAlertMessage}
                  setAlertStatus={setAlertStatus}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
