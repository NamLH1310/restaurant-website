import { useEffect } from 'react';

function decrementQuantityHandler(quantity, setQuantity) {
  if (!quantity) {
    setQuantity(1);
  } else if (quantity > 1) {
    setQuantity(quantity - 1);
  }
}

function incrementQuantityHandler(quantity, setQuantity) {
  if (!quantity) {
    setQuantity(2);
  } else {
    setQuantity(quantity + 1);
  }
}

function decrementQuantityCartHandler(cartItems, setCartItems, index) {
  let newQuantity = cartItems[index].quantity - 1;
  if (newQuantity < 1) {
    newQuantity = 1;
  }
  setCartItems(cartItems.map((item, i) => i === index ? Object.assign({}, item, { quantity: newQuantity }) : item));
}

function incrementQuantityCartHander(cartItems, setCartItems, index) {
  setCartItems(cartItems.map((item, i) => i === index ? Object.assign({}, item, { quantity: item.quantity + 1 }) : item));
}

function IncDecInput({ isCart, quantity, setQuantity, cartItems, setCartItems, index }) {

  useEffect(function () {
    if (quantity <= 0) {
      setQuantity(1);
    }
  }, [quantity, setQuantity]);

  return (
    <div className="w-32 my-1">
      <label className="w-full font-medium text-lg text-bold inline-block py-1">Số lượng:</label>
      <div className="flex flex-row w-full rounded-lg bg-transparent">
        <button
          className="bg-red-500 text-gray-600 hover:text-gray-700 hover:bg-red-700 w-20 rounded-l cursor-pointer outline-none"
          onClick={() => isCart
            ? decrementQuantityCartHandler(cartItems, setCartItems, index)
            : decrementQuantityHandler(quantity, setQuantity)}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="outline-none focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
          name="custom-input-number"
          value={isCart ? cartItems[index].quantity : quantity}
          onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
        >
        </input>
        <button
          className="bg-red-500 text-gray-600 hover:text-gray-700 hover:bg-red-700 w-20 rounded-r cursor-pointer"
          onClick={() => isCart
            ? incrementQuantityCartHander(cartItems, setCartItems, index)
            : incrementQuantityHandler(quantity, setQuantity)}
        >
          <span className={`m-auto text-3xl font-thin ${isCart ? 'text-red-700' : ''}`}>+</span>
        </button>
      </div>
    </div>
  );
}

export default IncDecInput;
