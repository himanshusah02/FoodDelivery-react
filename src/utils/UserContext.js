import { createContext } from "react";

const UserContext = createContext({
    loggendInuser : "DEFAULT USER",
})

export default UserContext;