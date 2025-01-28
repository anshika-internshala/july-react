import userContext from "../utils/userContext";
import { useContext } from "react";

function RestaurantCard(props) {
  const { name, avgRating, cloudinaryImageId, cuisines } = props.details;
  const userDetails = useContext(userContext);
  return (
    <div className="m-8 w-52">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt=""
        width="200px"
        className="rounded-xl h-32"
      />
      <h1 className="font-bold">{name}</h1>
      <span>{avgRating} </span>
      <p>{cuisines}</p>
      <p>{userDetails.loggedInUser}</p>
    </div>
  );
}

export default RestaurantCard;
