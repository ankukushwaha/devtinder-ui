import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Body({imageURL}){
    return(
        <>
            <Header imageURL={imageURL}/>
            <Outlet /> 
            <Footer />
        </>
    )
}

export default Body;