function RestaurantCard(props) {
  const { name, rating, deliveryTime, cuisines, location, imageUrl } =
    props.details;
  return (
    <div className="m-8 w-52">
      <img src={imageUrl} className="rounded-md h-40 w-52"></img>
      <h1 className="font-bold">{name}</h1>
      <span>{rating} </span>
      <span className="font-semibold">{deliveryTime} mins</span>
      <p>{cuisines}</p>
      <p>{location}</p>
    </div>
  );
}

export default RestaurantCard;
