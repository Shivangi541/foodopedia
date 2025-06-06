import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
//import "./RestaurantMenu.css";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  if (!resInfo) return <Shimmer />;

  // Get restaurant info
  const infoCard = resInfo?.data?.cards?.find((card) => card?.card?.card?.info);
  const {
    name,
    cuisines = [],
    areaName,
    costForTwoMessage,
  } = infoCard?.card?.card?.info || {};

  // Get menu item cards
  const regularSection =
    resInfo?.data?.cards?.find(
      (card) => card?.groupedCard?.cardGroupMap?.REGULAR
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const itemCardsSection = regularSection.find(
    (section) => section?.card?.card?.itemCards
  );

  const itemCards = itemCardsSection?.card?.card?.itemCards || [];
  // console.log(regularSection);
  const category = regularSection.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(category);
  return (
    <div className="menu-item">
      <div className="restaurant-info">
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{areaName}</h3>
        <h3>{costForTwoMessage}</h3>
      </div>
      {/* <div className="menu-list">
        <p>Menu details will be displayed here:</p>
        {/* <ul>
          {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              <span className="item-name">{item?.card?.info?.name}</span>
              <span className="item-price">
                ₹
                {(item?.card?.info?.defaultPrice ?? item?.card?.info?.price) /
                  100}
              </span>
            </li>
          ))}
        </ul> */}

      {category.map((cat, index) => (
        <RestaurantCategory
          key={cat?.card?.card?.title}
          data={cat?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
