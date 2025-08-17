import React, { useEffect } from "react";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { BASE_URL } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/UserSlice";

function Body(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userFromStore = useSelector((store) => store.user);
    const fetchProfile = async() => {
        try{
            const user = await fetch(BASE_URL + "/profile/view", {
                method: "GET",
                headers: {"Content-Type": "application/json"},
                credentials: "include"
            });

            if(!user.ok){
                if(user.status === 401){
                    navigate("/login");
                }
                throw new Error("Failed to fetch profile");
            }
            const result = await user.json();
            dispatch(addUser(result));
        }
        catch(err){
            console.error(err.message);
        }
    }

    useEffect(() => {
        if(!userFromStore){
            fetchProfile();
        }
    },[])

    return(
        <>
            <Header/>
            <Outlet /> 
            <Footer />
        </>
    )
}

export default Body;