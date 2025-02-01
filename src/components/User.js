import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const User=()=>{
    const {loggendInuser} = useContext(UserContext)
    return(
        <h1>{loggendInuser}</h1>
    )
}
export default User;