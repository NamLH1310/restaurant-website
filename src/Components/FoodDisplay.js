import { ContextList } from '../Context';
import { useContext } from 'react';

function FoodDisplay(props) {
  const { expandProductModal } = useContext(ContextList);
  return (
    <div
      className="relative bg-gray-50 h-44 ring-1 ring-yellow-400 hover:opacity-90 cursor-pointer food  transform hover:scale-105 transition-all duration-500 "
      key={props.value.id}
    >
      <div className="ml-4 mt-1 font-semibold food-text">
        <h4>{props.value.name}</h4>
        <h5 className="-mt-1 text-red-600">{props.value.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</h5>
      </div>
      <div>
        <img
          src={props.value.img}
          alt="com chien"
          className="h-24 w-2/4 mt-2 mx-auto food-img"
          onClick={() => expandProductModal(props.value)}
        />
      </div>
      <i
        className="absolute bottom-0 right-0 mr-1 mb-1 fas fa-cart-plus"
        style={{ color: "var(--button-cart" }}
        onClick={() => expandProductModal(props.value)}
      ></i>
    </div>
  );
}
export default FoodDisplay;
