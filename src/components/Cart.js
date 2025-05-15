import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
//import RestaurantCategory from "./RestaurantCategory";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log("Cart Items:", cartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-8 p-10">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>
      {!cartItems || cartItems.length === 0 ? (
        <div className="text-gray-500">Your cart is empty</div>
      ) : (
        <div className="max-w-2xl mx-auto">
          {cartItems.map((item, index) => {
            const itemInfo = item?.card?.info;
            const uniqueKey = `${itemInfo?.id}-${index}-${Date.now()}`;
            return (
              <div
                key={uniqueKey}
                className="flex justify-between items-center p-4 border-b border-gray-200"
              >
                <div className="flex-1 text-left">
                  <h3 className="font-semibold">{itemInfo?.name}</h3>
                  <p className="text-gray-600">
                    ₹{(itemInfo?.defaultPrice ?? itemInfo?.price) / 100}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">
                    Qty: {item.quantity || 1}
                  </span>
                  <span className="font-semibold">
                    ₹
                    {(
                      (itemInfo?.defaultPrice ?? itemInfo?.price) / 100
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            );
          })}
          <div className="mt-6 text-right">
            <div className="text-xl font-bold">
              Total: ₹
              {cartItems
                .reduce(
                  (total, item) =>
                    total +
                    (item?.card?.info?.defaultPrice ??
                      item?.card?.info?.price) /
                      100,
                  0
                )
                .toFixed(2)}
            </div>
            <button
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
