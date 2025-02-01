import { useState } from "react";
import ItemList from "./ItemList";

const RestrauntCategory = ({ data, showCategory , setShowIndex}) => {
  // console.log(data);
  // const [showItem, setShowItems] = useState(false);
  const handleClick = ()=>{
    // console.log("clicked in the category")
    // setShowItems(!showItem);
    setShowIndex();
  }

 
  return (
    <div>
      {/* Header */}
      <div className="w-8/12 bg-gray-200 shadow-lg mx-auto my-4 p-4 rounded-lg ">
        <div
          className="flex flex-row justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className=" font-bold text-2xl ">
            {" "}
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔻</span>
        </div>

        {showCategory && (
          <div className="px-8">
            {data?.itemCards?.map((v) => (
              <ItemList 
              data-testid = "foodItems"
              items={v} 
              key={v?.card?.info?.id} />
            ))}
            {/* <ItemList items={data.itemCards} /> */}
          </div>
        )}
        {/* accordion Body */}
      </div>
    </div>
  );
};

export default RestrauntCategory;
