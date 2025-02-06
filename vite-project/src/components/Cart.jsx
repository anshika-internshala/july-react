import { useSelector, useDispatch } from "react-redux";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  function handleAddItem(item) {
    dispatch(addItem(item));
  }

  function handleRemoveItem(item) {
    dispatch(removeItem(item));
  }

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div className="flex flex-wrap m-4">
      <button className="bg-slate-50" onClick={handleClearCart}>
        Clear Cart
      </button>
      {cartItems.map((res) => {
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

            <span>{res.quantity}</span>

            <button
              className="border bg-green-300 h-8 relative top-16 right-5"
              onClick={() => handleAddItem(res)}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
