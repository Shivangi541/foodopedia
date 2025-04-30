// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router";
// import { MENU_API } from "../utils/constants";
// const RestaurantMenu = () => {
//   const [menu, setMenu] = useState(null); // State to store menu data
//   const { resId } = useParams(); // Get the restaurant ID from the URL

//   useEffect(() => {
//     if (resId) {
//       fetchMenu(); // Fetch the menu data when the component mounts
//     }
//   }, [resId]);
//   // console.log(params);
//   const fetchMenu = async () => {
//     const response = await fetch(MENU_API + resId); // Fetch the menu data from the API );
//     const result = await response.json();
//     setMenu(result.data); // Set the menu data to state
//     console.log(result);
//   };
//   if (menu === null) {
//     return <Shimmer />;
//   }
//   const { name, cuisines, cloudinaryImageId, costForTwoMessage, areaName } =
//     menu?.cards[2]?.card?.card?.info || {}; // Destructure the restaurant info from the menu data

//   const { itemCards } =
//     menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ||
//     [];
//   console.log(itemCards);

//   return (
//     <div className="menu-item">
//       <h1>{name}</h1>
//       <h3>{cuisines.join(", ")}</h3>
//       <h3>{areaName}</h3>
//       <h3>{costForTwoMessage}</h3>
//       <p>Menu details will be displayed here.</p>
//       <ul>
//         {itemCards.map((item) => (
//           <li key={item?.card?.info?.id}>
//             {item?.card?.info?.name}-
//             {item?.card?.info?.defaultPrice / 100 ||
//               item?.card?.info?.price / 100}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default RestaurantMenu;

// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";

// import { useParams } from "react-router"; // ✅ Correct

// import { MENU_API } from "../utils/constants";

// const RestaurantMenu = () => {
//   const [menu, setMenu] = useState(null);
//   const { resId } = useParams();

//   useEffect(() => {
//     if (resId) {
//       fetchMenu();
//     }
//   }, [resId]);

//   const fetchMenu = async () => {
//     try {
//       const response = await fetch(MENU_API + resId);
//       const result = await response.json();
//       setMenu(result.data);
//       console.log(result);
//     } catch (error) {
//       console.error("Error fetching menu:", error.message);
//     }
//   };

//   if (menu === null) {
//     return <Shimmer />;
//   }

//   const { name, cuisines, cloudinaryImageId, costForTwoMessage, areaName } =
//     menu?.cards?.find((card) => card?.card?.card?.info)?.card?.card?.info || {};

//   const itemCards =
//     menu?.cards?.find(
//       (card) =>
//         card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card
//           ?.itemCards
//     )?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards ||
//     [];

//   return (
//     <div className="menu-item">
//       <h1>{name}</h1>
//       <h3>
//         {Array.isArray(cuisines)
//           ? cuisines.join(", ")
//           : "Cuisines not available"}
//       </h3>
//       <h3>{areaName}</h3>
//       <h3>{costForTwoMessage}</h3>
//       <p>Menu details will be displayed here.</p>
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
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router"; // ✅ Use 'react-router-dom' instead of 'react-router'
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    if (resId) {
      fetchMenu();
    }
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      const result = await response.json();
      setMenu(result.data);
      console.log("Fetched Menu Data:", result.data);
    } catch (error) {
      console.error("Error fetching menu:", error.message);
    }
  };

  if (!menu) return <Shimmer />;

  // Get restaurant info
  const infoCard = menu.cards?.find((card) => card?.card?.card?.info);
  const {
    name,
    cuisines = [],
    areaName,
    costForTwoMessage,
  } = infoCard?.card?.card?.info || {};

  // Dynamically find the first section that contains itemCards
  const regularSection =
    menu.cards?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

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
