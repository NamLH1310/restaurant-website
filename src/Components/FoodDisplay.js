import { ContextList } from '../Context';
import { useContext } from 'react';

function expandModal(data, setProductModalOpen, setSelectedData, setQuantity) {
  setProductModalOpen(true);
  setSelectedData(data);
  setQuantity(1);
}

function FoodDisplay(food) {
  // const add = useContext(ContextList).addCart
  const { setProductModalOpen, setSelectedData, setQuantity } = useContext(ContextList);
  return (
    <div
      className="relative bg-gray-50 h-44 ring-1 ring-yellow-400 hover:opacity-90 cursor-pointer food  transform hover:scale-105 transition-all duration-500 "
      key={food.value.id}
    >
      <div className="ml-4 mt-1 font-semibold food-text">
        <h4>{food.value.name}</h4>
        <h5 className="-mt-1 text-red-600">{food.value.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</h5>
      </div>
      <div>
        <img
          src={food.value.img}
          alt="com chien"
          className="h-24 w-2/4 mt-2 mx-auto food-img"
          onClick={() => expandModal(food.value, setProductModalOpen, setSelectedData, setQuantity)}
        />
      </div>
      <i
        className="absolute bottom-0 right-0 mr-1 mb-1 fas fa-cart-plus"
        style={{ color: "var(--button-cart" }}
        onClick={() => { expandModal(food.value, setProductModalOpen, setSelectedData, setQuantity) }}
      ></i>
    </div>
  );
}
export default FoodDisplay;
