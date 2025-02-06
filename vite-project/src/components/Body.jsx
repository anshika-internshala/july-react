import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useContext } from "react";

function Body() {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  const [filters, setFilters] = useState({
    ratings: false,
    fastDelivery: false,
  });

  const userDetails = useContext(userContext);

  useEffect(() => {
    // API calls --- fetch data from server
    // If API calls takes time , then component rendering is not impacted

    fetch("http://localhost:8900/api/restaurants")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6909835&lng=77.44527719999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilteredRestaurants(
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        setAllRestaurants(
          data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      });
  }, []);

  useEffect(() => {
    setFilteredRestaurants(
      allRestaurants.filter((restaurant) => {
        const { ratings, fastDelivery } = filters;

        if (!ratings && !fastDelivery) {
          console.log("all ", allRestaurants);
          return allRestaurants;
        } else {
          return ratings && fastDelivery
            ? restaurant.rating >= 4 &&
                restaurant.deliveryTime.split("-")[1] <= 40
            : ratings
            ? restaurant.rating >= 4
            : restaurant.deliveryTime.split("-")[1] <= 40;
        }
      })
    );
  }, [filters]);

  function handleFilterUpdate(filter) {
    const value =
      filter === "ratings" ? !filters.ratings : !filters.fastDelivery;

    setFilters((prev) => ({ ...prev, [filter]: value }));
  }

  return (
    <div className="mx-auto w-5/6">
      <h1 className="font-bold p-8 text-xl">
        Restaurants with online food delivery
      </h1>

      <input
        type="text"
        className="border border-black m-5"
        onChange={(e) => userDetails.setUserName(e.target.value)}
      ></input>

      <div
        className={`flex items-center border-2 rounded-lg border-slate-400 ml-8 w-fit ${
          filters.ratings ? "bg-slate-100" : ""
        }`}
      >
        <button
          className={`p-2  `}
          onClick={() => handleFilterUpdate("ratings")}
        >
          Ratings4.0+
        </button>

        {filters.ratings ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x mx-2"
            viewBox="0 0 16 16"
            onClick={() => handleFilterUpdate("ratings")}
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        ) : (
          ""
        )}
      </div>

      <div
        className={`flex items-center border-2 rounded-lg border-slate-400 ml-8 w-fit ${
          filters.fastDelivery ? "bg-slate-100" : ""
        }`}
      >
        <button
          className={`p-2  `}
          onClick={() => handleFilterUpdate("fastDelivery")}
        >
          Fast Delivery
        </button>

        {filters.fastDelivery ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x mx-2"
            viewBox="0 0 16 16"
            onClick={() => handleFilterUpdate("fastDelivery")}
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        ) : (
          ""
        )}
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.length == 0 ? (
          <h1>Loading...</h1>
        ) : (
          filteredRestaurants.map((res) => (
            <Link to={`/restaurant/${res.info.id}`}>
              <RestaurantCard details={res.info} key={res.info.id} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Body;

// useEffect Hook  ---->

// API ---> client ---- server ----- database

// fetch restaurants ---- some ms

// render UI ----> Loading----> useEffect -----> API call ----> data----> updateUI
// [] -> empty dependency array
// code which is inside useEffect will be executed only once

//[a , b] ---> code will be executed only when a or b changes

//useEffect ---->  First component is rendered  , then useEffect gets executed.
// API calls --- may take time
// Optional Chaining
