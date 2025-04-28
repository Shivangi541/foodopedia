import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null); // State to store menu data
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5812837&lng=88.4261513&restaurantId=10370&catalog_qa=undefined&submitAction=ENTER"
    );
    const result = await response.json();
    setMenu(result.data); // Set the menu data to state
    console.log(result);
  };
  if (menu === null) {
    return <Shimmer />;
  }
  const { name, cuisines, cloudinaryImageId, costForTwoMessage, areaName } =
    menu?.cards[2]?.card?.card?.info;
  return (
    <div className="menu-item">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{areaName}</h3>
      <h3>{costForTwoMessage}</h3>
      <p>Menu details will be displayed here.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
        <li>Item 8</li>
        <li>Item 9</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
