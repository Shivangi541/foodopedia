const Cart = () => {
  return (
    <div>
      <div>
        <h1>Cart</h1>
        <h2>Your order summary</h2>
      </div>
      <div>
        {/* Cart items will be mapped here */}
        <div>
          <div>
            <div>Sample Item</div>
            <div>₹299</div>
          </div>
          <div>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <span>Total Amount:</span>
          <span>₹299</span>
        </div>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
