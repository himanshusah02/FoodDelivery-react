import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntCategory from "./RestraurantCategory";
// import { MENU_API_URL } from "../utils/LogoUrl";

function Restaurant() {
  // const [restInfo, setResInfo] = useState(null);
  // const [resMenu, setResMenu] = useState(null);

  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();
  const restInfo = useRestrauntMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //    MENU_API_URL + resId

  //   );
  // const json = await data.json();
  // setResInfo(json);
  // let menudata = json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2];
  // // console.log(json.data.cards[2].card.card.info);
  // console.log(json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards);
  // setResMenu(menudata);
  // console.log(json);
  // };
  // console.log(resMenu);

  if (restInfo === null) return <Shimmer />;

  const {
    name,
    city,
    locality,
    cuisines,
    isOpen,
    costForTwoMessage,
    avgRating,
  } = restInfo?.data?.cards[2]?.card?.card?.info || {};
  // console.log(
  //   restInfo?.data?.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
  //     .itemCards[2].card.info.name
  // );
  // console.log(
  //   restInfo?.data?.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
  //     .itemCards[2].card.info.category
  // );
  const categories =
    restInfo?.data?.cards[5]?.groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div>
      {restInfo ? (
        <>
          <div className="flex flex-row justify-between  bg-green-200 content-center px-16">
            <h1 className="text-start text-5xl pl-6 p-5 ">{name}</h1>
            <div className="flex flex-col texr-xl m-5 ">
              <h3 className=" text-xl ">
                {city}, {locality}
              </h3>
              <h1> Rating -⭐ {avgRating}</h1>
              <h2> Cost : {costForTwoMessage}</h2>
            </div>
          </div>

          {categories.map((v,index) => (
            <RestrauntCategory
              data={v?.card?.card}
              showCategory={index === showIndex && true}
              key={v?.card?.card?.title}
              setShowIndex={()=>setShowIndex(index)}
            />
          ))}
        </>
      ) : (
        <Shimmer />
      )}
    </div>
  );
}

export default Restaurant;
