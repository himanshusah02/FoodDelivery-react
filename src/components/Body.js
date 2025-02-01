import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { WithPromotedLable } from "./ProductCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);
  let [filteredrestra, setFilteredrestra] = useState();

  let [inputText, setInputText] = useState("");

  const RestaurantCardPromoted = WithPromotedLable(RestaurantCard);

  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl =
    "https://www.swiggy.com/mapi/homepage/getCards?lat=28.65200&lng=77.16630";

  // console.log(setInputText);
  useEffect(() => {
    FetchApi();
  }, []);

  let FetchApi = async () => {
    let response = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=28.65200&lng=77.16630"
      // proxyUrl + apiUrl
    );
    let data = await response.json();

    // console.log(
    //   data.data.success.cards[1].gridWidget.gridElements.infoWithStyle
    //     .restaurants
    // );

    setRestaurantList(
      data?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredrestra(
      data?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // console.log(restaurantList);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1 className="text-4xl text-red-600 text-center ">Looks you are offline</h1>;

  const { loggendInuser, setUserName } = useContext(UserContext);

  return restaurantList.length === 0 ? (
    <div className="shimmer">
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
    </div>
  ) : (
    <div className="ml-40">
      <div className="flex flex-row gap-[200] m-10">
        <div className=" w-1/2 h-10  ">
          <input
            data-testid="searchInput"
            type="text"
            className="w-4/5 h-10 border  rounded-l-lg outline outline-none bg-green-100"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);

              // console.log(e.target.value);
            }}
          />
          <button
            className="bg-green-500 w-20 h-10 rounded-r-xl"
            onClick={() => {
              const filterRes = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(inputText.toLowerCase())
              );

              console.log(filterRes);
              setFilteredrestra(filterRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="pr-16 ">
          <button
            className="bg-red-500 pr-4 w-72 h-10 rounded-lg text-2xl"
            onClick={() => {
              const filterdList = restaurantList.filter(
                (res) => res.info.avgRating >= 4.4
              );
              // console.log(filterdList);
              setFilteredrestra(filterdList);
            }}
          >
            TOP Rated Restaurant
          </button>
        </div>
{/*        

        <input
          className="w-50 h-10 text-xl border border-black rounded-lg  "
          maxlength="12"
          value={loggendInuser}
          onChange={(e) => setUserName(e.target.value)}
        ></input> */}
      </div>

      <div className="flex flex-wrap justify-center mt-14 items-center w-3/4">
        {filteredrestra.map((v) => (
          <Link key={v.info.id} to={"/restaurant/" + v.info.id}>
            {v.info.isOpen ? (
              <RestaurantCardPromoted restList={v} />
            ) : (
              <RestaurantCard restList={v} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
