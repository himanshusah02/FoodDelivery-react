import React from "react";
import { CARD_IMG_URL } from "../utils/LogoUrl";

const RestaurantCard = (props) => {
  // console.log("card render");

  let { restList } = props;
  //   console.log(props)
  //   console.log(restList.info);

  let {
    name,
    id,
    cloudinaryImageId,
    locality,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = restList?.info;
  // console.log({cuisines.splice(1,3).join()});
  return (
    <div
      data-testid="resCard"
      className="h-[400] ml-6 mb-6 rounded-xl flex flex-col shadow-xl bg-slate-100 hover:bg-slate-200"
    >
      <img
        className="w-80 h-[200] rounded-3xl shadow-m object-cover m-2"
        src={CARD_IMG_URL + cloudinaryImageId}
      />
      <div className=" mt-3 flex flex-col ml-4">
        <h3 className="font-semibold text-2xl font">{name.slice(0, 15)}</h3>
        <h4 className="font-bold">
          ⭐ {avgRating} • {sla.slaString}
        </h4>

        <p className="text-slate-500 ">{cuisines.slice(0, 3).join()}</p>

        <p>{locality}</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

//higher order Component

//input - ProductCard - restaurantCardPromoted

export const WithPromotedLable = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" ml-8 absolute bg-green-400 rounded-lg p-1">
          OPEN
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
