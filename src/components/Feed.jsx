import React, { useEffect } from "react";
import { BASE_URL } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/FeedSlice";
import UserCard from "./userCard";

function Feed(){
    const dispatch = useDispatch();
    const dataFromStore = useSelector((store) => store.feed);

    const feedData = async() => {
        try {
            if(dataFromStore) return;
            const data = await fetch(BASE_URL + "/user/feed", {
                method: "GET",
                headers: {"Content-Type": "application/json"},
                credentials: "include"
            })

            if(!data.ok){
                throw new Error("Error in getting feed!");
            }

            const result = await data.json();
            dispatch(addFeed(result.users[0]));

        } catch (error) {
            console.error(error.messasge);
        }
    }

    useEffect(() => {
        feedData();
    },[])

    return dataFromStore && (
        <>
            <UserCard user={dataFromStore}/>
        </>
    )
}

export default Feed;