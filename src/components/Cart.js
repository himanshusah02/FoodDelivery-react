import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.Items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  console.log(cartItems);
 
  return (
    <>
      <div className="text-center m-8 p-10 border  rounded-lg outline-dashed">
        <h1 className="text-6xl text-green-800">Cart</h1>
      </div>
      <div className="flex flex-col gap-4">
        <button
          className=" p-1 m-auto bg-red-600 text-white w-32 h-16 rounded-lg "
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
       
        <div className="w-8/12 p-10 m-auto border border-black  rounded-lg ">
        {cartItems.length === 0 && <h1 className="font-bold text-black  text-4xl">Please Add items to cart </h1>}
          {cartItems.map((v) => (
            <ItemList items={v} key={v?.card?.info?.id} />
          ))}
        </div>

      </div>
    </>
  );
};

export default Cart;
