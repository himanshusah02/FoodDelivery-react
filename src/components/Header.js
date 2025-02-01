import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/LogoUrl";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
// useOnlineStatus

const Header = () => {
  let [btn, setBtn] = useState("Login");
  // console.log("heder render");

  const onlineStatus = useOnlineStatus();
  const { loggendInuser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.Items);
  // console.log(cartItems);

  // console.log({loggendInuser});

  return (
    <div className="flex justify-between bg-[#FFFFFF] shadow-2xl ">
      <img className="w-36 rounded-full" src={LOGO_URL} />

      <div className="flex items-center">
        <ul className="flex  flex-row p-5 m-8  text-xl ">
          <li className="px-4">{onlineStatus ? "online-🟢" : "offline-🔴"}</li>
          <li className="px-4">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact"> Contact </Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/Cart">Cart -{cartItems.length} </Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4  rounded-lg   ">
            <button 
              onClick={() => {
                btn === "Login" ? setBtn("Logout") : setBtn("Login");
                // setBtn("LogOut");
              }}
              className={`
                px-4 py-2 rounded-md  // Consistent styling
                ${btn === 'Logout' ? 'bg-red-500 hover:bg-red-700 text-white' : 'bg-green-500 hover:bg-green-700 text-white'}
              `}
            >
              {btn}
            </button>
          </li>
          <li> user-{loggendInuser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
