import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Body(){
    return(
        <>
            <Header/>
            <Outlet /> 
        </>
    )
}

export default Body;