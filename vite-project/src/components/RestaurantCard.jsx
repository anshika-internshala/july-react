import userContext from "../utils/userContext";
import { useContext } from "react";

function RestaurantCard(props) {
  const { name, rating, imageUrl, cuisines } = props.details;
  const userDetails = useContext(userContext);
  return (
    <div className="m-8 w-52">
      <img src={imageUrl} alt="" width="200px" className="rounded-xl h-32" />
      <h1 className="font-bold">{name}</h1>
      <span>{rating} </span>
      <p>{cuisines}</p>
      <p>{userDetails.loggedInUser}</p>
    </div>
  );
}

export default RestaurantCard;
