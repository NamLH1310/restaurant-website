function Food(food) {
    return (
        <div className="relative bg-gray-50 h-auto my-1 ring-1 ring-yellow-400 hover:opacity-90 food">
            <div className="ml-2 font-semibold food-text">
                <h4>{food.value.name}</h4>
                <h5 className="-mt-1 text-red-600">{food.value.price}</h5>
            </div>
            <div>
                <img src={food.value.img} className="h-20 w-2/3 mx-auto food-img" alt={food.value.name} />
            </div>
            <i
                className="absolute bottom-0 right-0 mr-1 mb-1 fas fa-cart-plus"
                style={{ color: "var(--button-cart" }}
            ></i>
        </div>
    )
}
export default Food