import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/LogoUrl";

const useRestrauntMenu = (resId) => {
  
 const[resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    setResInfo(json);
    console.log(resInfo);

  };

  return resInfo;
};
export default useRestrauntMenu;
