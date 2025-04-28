import { useEffect } from "react";
const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenuData();
  }, []);
  // Fetch restaurant menu data from API
  const fetchMenuData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5812837&lng=88.4261513&restaurantId=10370&catalog_qa=undefined&submitAction=ENTER"
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  fetchMenuData();

  return (
    <div>
      <h1>Restaurant Menu</h1>
      <p>Here you can find the menu of our restaurant.</p>
      <ul>
        <li>Pizza</li>
        <li>Burger</li>
        <li>Pasta</li>
        <li>Salad</li>
        <li>Dessert</li>
        <li>Drinks</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
