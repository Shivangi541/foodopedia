import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestCard, { withOpenLabel } from "./RestCard";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
//           <Suspense fallback={<Shimmer />}>
const Body = () => {
  const [allres, setAllRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchText, setSearchText] = useState("");
  const RestCardOpen = withOpenLabel(RestCard);
  const { LoggedInInfo, setLoggedInInfo } = useContext(UserContext);

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
          setFilteredRes(resData);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchRes();
  }, []);

  const handleFilterClick = () => {
    if (isFiltered) {
      setFilteredRes(allres);
    } else {
      const topRated = allres.filter(
        (restaurant) => restaurant.info.avgRating > 4.4
      );
      setFilteredRes(topRated);
    }
    setIsFiltered(!isFiltered);
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

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1 className="offline">
        Looks like you are offline. Please check your internet connection.
      </h1>
    );
  }

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
        <label>User Name</label>
        <input
          id="username"
          className="search-box"
          type="text"
          value={LoggedInInfo}
          placeholder="Enter your name"
          onChange={(e) => {
            setLoggedInInfo(e.target.value);
          }}
        ></input>
      </div>
      <div className="restaurant-list">
        {filteredRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {/* {restaurant.availability?.opened ? (
              <RestCardOpen resObj={restaurant} />
            ) : (
              <RestCard resObj={restaurant} />
            )} */}
            {/* if availability tag is there and if opened is true then we render higher order component else normal component*/}
            {restaurant.availability && restaurant.availability.opened ? (
              <RestCardOpen resObj={restaurant} />
            ) : (
              <RestCard resObj={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
