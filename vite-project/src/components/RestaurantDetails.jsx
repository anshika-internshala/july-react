import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

function RestaurantDetails() {
  const params = useParams();
  const dispatch = useDispatch();

  const [restaurantMenuItems, setRestaurantMenuItems] = useState([]);
  const [isValidPage, setIsValidPage] = useState(true);

  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  async function fetchMenuItems() {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6909835&lng=77.44527719999999&restaurantId=${params.id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await response.json();

    console.log(data);
    if (data.statusCode == 1) {
      setIsValidPage(false);
    } else {
      console.log(
        data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
          .itemCards
      );

      setRestaurantMenuItems(
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards
      );

      // const items = restaurantMenuItems.map((item) => {
      //   return { ...item.card.info, quantity: 0 };
      // });
      // setRestaurantMenuItems(items);
    }
  }

  function handleAddItem(item) {
    // const item1 = cartItems.find(
    //   (item2) => item2.card.info.id === item.card.info.id
    // );
    // console.log("item", item1);

    // const item4 = restaurantMenuItems.find(
    //   (item3) => item3.card.info.id === item.card.info.id
    // );

    dispatch(addItem(item));
  }

  function handleRemoveItem(item) {
    dispatch(removeItem(item));
  }

  return (
    <div className="flex flex-wrap m-4">
      {isValidPage ? (
        restaurantMenuItems.map((res) => {
          return (
            <div className="flex w-3/4 mx-auto mb-10 border-b-4 p-4">
              <div className="flex flex-col w-3/4">
                <h1>{res.card.info.name}</h1>
                <h1>{res.card.info.defaultPrice / 100}</h1>
                <h1>{res.card.info.description}</h1>
              </div>
              <img
                className="w-52 h-44 rounded-md border shadow-lg border-gray-100"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${res.card.info.imageId}`}
                alt=""
              />

              <button
                className="border bg-green-300 h-8 relative top-16 right-5"
                onClick={() => handleRemoveItem(res)}
              >
                -
              </button>

              <span> {0} </span>

              <button
                className="border bg-green-300 h-8 relative top-16 right-5"
                onClick={() => handleAddItem(res)}
              >
                +
              </button>
            </div>
          );
        })
      ) : (
        <>
          <h1>Invalid Page</h1>
        </>
      )}
    </div>
  );
}

export default RestaurantDetails;

// Props Drilling
// Context API
// Redux --- separate JS library which is used for state management

// click on add button ----> action is dispatched ----> reducer function
// create store
// create multiple slices inside the store
// slices can be cart slice , user slice , payment etc

// reducer function will update this slice

// Selectors ---- we can update UI based on the slice
