import { useDispatch } from "react-redux";
import { CARD_IMG_URL } from "../utils/LogoUrl";
import { addItem } from "../utils/CartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const addCartItems = (items) => {
    dispatch(addItem(items));
  };

  // console.log(items);
  const { category, defaultPrice, description, imageId, inStock, name, price } =
    items?.card?.info;
  return (

    <div className="flex flex-row bg-[#FFFFFF] rounded-md p-2  my-4 gap-40 ">
      <div className="w-3/5">
        <span className="font-bold text-3xl text-[#414449] my-2  ">{name}</span>
        {/* <h1>{category}</h1> */}
        <span className="text-green-500 font-bold my-4 text-xl">
          {" "}
          - ₹ {price / 100 ? price / 100 : defaultPrice / 100}{" "}
        </span>

        <h1 className="text-slate-600 text-xl ">{description}</h1>
      </div>
      <div className="w-2/5 ">
        <div className="absolute ">
          <button
            className="absolute w-16 h-8 bg-green-600 text-white font-bold mt-[168] rounded "
            onClick={() => addCartItems(items)}
          >
            ADD+
          </button>
        </div>
        <img
          className=" w-[200] h-[200]  rounded-xl ml-[100]"
          src={CARD_IMG_URL + imageId}
        ></img>
      </div>

      {/* <h1>{price}</h1> */}
      {/* <h1>{inStock}</h1> */}
      {/* <h1>{imageId}</h1> */}
    </div>
  );
};

export default ItemList;
