import React, { useContext } from "react";
import User from "./user";
import UserContext from "../utils/UserContext";
const About = () => {
  const {loggendInuser}= useContext(UserContext)
  return (
    <>
      <h1>Hello from {loggendInuser}</h1>
      <User />
    </>
  );
};

export default About;
