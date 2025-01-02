import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";
import { useState, useEffect } from "react";

function Body() {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  const [filters, setFilters] = useState({
    ratings: false,
    fastDelivery: false,
  });

  useEffect(() => {
    setFilteredRestaurants(
      restaurants.filter((restaurant) => {
        const { ratings, fastDelivery } = filters;

        if (!ratings && !fastDelivery) {
          return restaurants;
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
      {console.log("Component Return function executed")}
      <h1 className="font-bold p-8 text-xl">
        Restaurants with online food delivery
      </h1>

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
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard details={restaurant} />
        ))}
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

//
