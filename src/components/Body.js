import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"; // Assuming you have this component
import RestCard from "./RestCard"; // Assuming you have this component

const Body = () => {
  const [allres, setAllRes] = useState([]); // Stores original list
  const [filteredRes, setFilteredRes] = useState([]); // Stores filtered list
  const [isFiltered, setIsFiltered] = useState(false); // Filter toggle
  const [searchText, setSearchText] = useState(""); // Search text

  useEffect(() => {
    const fetchRes = async () => {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5812837&lng=88.4261513&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        const resData = json?.data?.cards?.find((item) =>
          item?.card?.card?.id?.includes("restaurant_grid")
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if (resData) {
          setAllRes(resData);
          setFilteredRes(resData); // Initialize filtered list with all restaurants
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchRes();
  }, []);

  const handleFilterClick = () => {
    if (isFiltered) {
      setFilteredRes(allres); // Reset to all restaurants
    } else {
      const topRated = allres.filter(
        (restaurant) => restaurant.info.avgRating > 4.4
      );
      setFilteredRes(topRated);
    }
    setIsFiltered(!isFiltered); // Toggle state
  };

  const handleSearch = () => {
    const searchFiltered = allres.filter((restaurant) => {
      const nameMatch = restaurant?.info?.name
        ?.toLowerCase()
        .includes(searchText.toLowerCase());
      const cuisineMatch = restaurant?.info?.cuisines?.some((cuisine) =>
        cuisine.toLowerCase().includes(searchText.toLowerCase())
      );
      return nameMatch || cuisineMatch;
    });
    setFilteredRes(searchFiltered);
  };

  if (allres.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            placeholder="Search for restaurants"
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleFilterClick}>
          {isFiltered ? "Show All Restaurants" : "Top Rated Restaurants"}
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRes.map((restaurantcard) => (
          <RestCard key={restaurantcard.info.id} resObj={restaurantcard} />
        ))}
      </div>
    </div>
  );
};

export default Body;
