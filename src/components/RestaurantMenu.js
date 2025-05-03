import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import { useParams } from "react-router"; // ✅ Use 'react-router-dom' instead of 'react-router'
// import useRestaurantMenu from "../utils/useRestaurantMenu"; // ✅ Import the custom hook
// const RestaurantMenu = () => {
//   //const [menu, setMenu] = useState(null);
//   const { resId } = useParams();
//   const resInfo = useRestaurantMenu(resId);

//   if (!resInfo) return <Shimmer />;

//   // Get restaurant info
//   const infoCard = menu.cards?.find((card) => card?.card?.card?.info);
//   const {
//     name,
//     cuisines = [],
//     areaName,
//     costForTwoMessage,
//   } = infoCard?.card?.card?.info || {};

//   // Dynamically find the first section that contains itemCards
//   const regularSection =
//     menu.cards?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
//       ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

//   const itemCardsSection = regularSection.find(
//     (section) => section?.card?.card?.itemCards
//   );

//   const itemCards = itemCardsSection?.card?.card?.itemCards || [];

//   return (
//     <div className="menu-item">
//       <h1>{name}</h1>
//       <h3>{cuisines.join(", ")}</h3>
//       <h3>{areaName}</h3>
//       <h3>{costForTwoMessage}</h3>
//       <p>Menu details will be displayed here:</p>
//       <ul>
//         {itemCards.map((item) => (
//           <li key={item?.card?.info?.id}>
//             {item?.card?.info?.name} - ₹
//             {(item?.card?.info?.defaultPrice ?? item?.card?.info?.price) / 100}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;
import { useParams } from "react-router"; // corrected import
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu"; // custom hook

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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

  return (
    <div className="menu-item">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{areaName}</h3>
      <h3>{costForTwoMessage}</h3>
      <p>Menu details will be displayed here:</p>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - ₹
            {(item?.card?.info?.defaultPrice ?? item?.card?.info?.price) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
