import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import SignIn from "./SignIn";

function Header() {
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  const length = cartItems.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  const userInfo = useContext(userContext);
  const [isVisible, setIsVisible] = useState(false);

  function openModal() {
    setIsVisible(true);
  }

  function closeModal() {
    setIsVisible(false);
  }

  //userInfo.printName();

  return (
    <div className="flex justify-evenly border-b-2 border-slate-200">
      <img
        src="https://cdn.dribbble.com/users/5960208/screenshots/16398589/i_will_2_modern_minimalist_logo_design_within_12_hrs__9__4x.jpg"
        alt=""
        width="100px"
        height="100px"
      />
      <ul className="flex items-center gap-6 ">
        <li>{userInfo.loggedInUser}</li>
        <li>{onlineStatus ? "🟢" : "🔴"}</li>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/search">
          <li>Search</li>
        </Link>
        <Link to="/offers">
          <li>Offers</li>
        </Link>
        <Link to="/help">
          <li>Help</li>
        </Link>
        {/* <Link to="/signIn">
          <li>SignIn</li>
        </Link> */}
        <Link onClick={openModal}>SignIn</Link>
        <Link to="/cart">
          <li>Cart</li>
          {length}
        </Link>
      </ul>
      <SignIn isVisible={isVisible} onClose={closeModal}></SignIn>
    </div>
  );
}

export default Header;
