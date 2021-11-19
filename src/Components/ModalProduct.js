import Modal from 'react-modal';
import React, { useEffect} from 'react';
import IncDecInput from './IncDecInput';
import {NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const fixedDecimal = (num, fixed = 2) =>
  Math.round(num * Math.pow(10, fixed)) / Math.pow(10, fixed);

function ModalProduct({
  productModalOpen,
  setProductModalOpen,
  selectedData,
  setSelectedData,
  cartModalOpen,
  setCartModalOpen,
  totalPrice,
  setTotalPrice,
  cartItems,
  setCartItems,
  checkedItems,
  setCheckedItems,
  quantity,
  setQuantity,
  setPayment
}) {
  useEffect(
    function () {
      if (!cartItems) return;
      setTotalPrice(
        fixedDecimal(
          cartItems
            .filter((_, i) => checkedItems[i])
            .map((e) => e.price * e.quantity)
            .reduce((preValue, curValue) => preValue + curValue, 0)
        )
      );
      if (cartItems.length > checkedItems.length) {
        setCheckedItems([...checkedItems, true]);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [cartItems, checkedItems]
  );

  function closeModal() {
    setSelectedData(null);
    setProductModalOpen(false);
  }
  function addItemToCart() {
    const index = cartItems.findIndex((e) => e.id === selectedData.id);
    if (index >= 0) {
      setCartItems(
        cartItems.map((item) =>
          item.id === selectedData.id
            ? Object.assign({}, item, {
                quantity: item.quantity + (quantity ? quantity : 1),
              })
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        Object.assign({}, selectedData, { quantity: quantity ? quantity : 1 }),
      ]);
    }
    NotificationManager.success('Đã thêm ' + selectedData.name,'Giỏ hàng',1500)
    closeModal();
  }

  function toggleChecked(index) {
    setCheckedItems(
      checkedItems.map((item, i) => (i === index ? !item : item))
    );
  }
  return (
    <>
      <Modal
        isOpen={productModalOpen}
        onRequestClose={closeModal}
        className="modal-product bg-gray-50 h-auto ring-4 ring-gray-400 rounded-2xl "
        ariaHideApp={false}
        overlayClassName="overlay"
        
      >
        {selectedData && (
          <div className="scroll-component">
            <div>
              <h5 className="p-1 bg-[#83c75d] w-full mx-auto  text-center rounded-3xl">
                Chi tiết món ăn
              </h5>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="w-1/2 pt-4 ">
                <img
                  className="w-10/12 pt-4 mx-auto"
                  alt="Food"
                  src={selectedData.img}
                />
              </div>
              <div className="w-1/2 pt-6">
                <h1 className="font-semibold text-xl mb-2">
                  {selectedData.name}
                </h1>
                <span className="text-bold text-xl">Đơn giá:</span>
                <span className="text-bold text-xl text-red-800">
                  {" "}
                  {fixedDecimal(selectedData.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                </span>
                <IncDecInput
                  isCart={false}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              </div>
              <div className="py-3 h-auto bg-gray-100 text-center w-11/12 mb-10 mt-2 rounded-md">
                Acerbic is anything sour, bitter or sharp - cutting, caustic,
                acid, mordant, barbed, prickly, biting
              </div>
              <div className="flex mx-auto justify-center my-4">
                <button
                  className="btn  bg-red-500 hover:bg-red-800"
                  onClick={closeModal}
                >
                  Hủy
                </button>
                <button
                  className="btn bg-primarycolor hover:bg-primarybold"
                  onClick={addItemToCart}
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
      {/* <div className="mx-2 my-4">
        <button
          className="btn bg-green-500 hover:bg-green-800"
          onClick={() => setCartOpenModal(true)}
        >
          Open Cart
        </button>
      </div> */}
      <Modal
        isOpen={cartModalOpen}
        onRequestClose={() => setCartModalOpen(false)}
        className="modal-cart  bg-gray-50 ring-4 ring-gray-400 rounded-2xl"
        ariaHideApp={false}
        overlayClassName="overlay"
      >
        <div className="scroll-component">
          <div>
            <h5 className="p-1 bg-[#83c75d] mx-auto  text-center rounded-3xl">
              Giỏ hàng
            </h5>
          </div>
          {cartItems &&
            cartItems.map((item, index) => (
              <div
                key={item.id}
                className="flex m-4 p-8 bg-gray-300 rounded-xl"
              >
                <div className="w-1/2">
                  <img
                    className="w-4/5 item-thumbnail"
                    alt="Food"
                    src={item.img}
                  />
                </div>
                <div className="w-2/5">
                  <h1 className="mb-4">{item.name}</h1>
                  <h2>
                    Đơn giá:{" "}
                    <span className="text-red-500">{item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                  </h2>
                  <div>
                    <IncDecInput
                      isCart={true}
                      quantity={quantity}
                      setQuantity={setQuantity}
                      cartItems={cartItems}
                      setCartItems={setCartItems}
                      index={index}
                    />
                  </div>
                </div>
                <div className="flex items-center w-1/10">
                  <input
                    type="checkbox"
                    onChange={() => toggleChecked(index)}
                    checked={checkedItems[index]}
                  />
                </div>
              </div>
            ))}
          <h2 className="text-center">
            Tổng cộng:{" "}
            <span className="font-semibold text-red-700">{totalPrice} VNĐ</span>
          </h2>
          <div className="flex justify-center my-4">
            <button className="btn bg-primarycolor hover:bg-primarybold" onClick={()=>{setCartModalOpen(false);setPayment(true)}}>
              Thanh toán
            </button>
            <button
              className="btn bg-blue-500 hover:bg-blue-800"
              onClick={() => setCartModalOpen(false)}
            >
              Tiếp tục mua sắm
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalProduct;
