import Modal from 'react-modal';
import React, { useEffect, useState } from 'react';
import IncDecInput from './IncDecInput';

const fixedDecimal = (num, fixed = 2) => (Math.round(num * Math.pow(10, fixed))/Math.pow(10, fixed));

function ModalProduct({
  productModalOpen, setProductModalOpen,
  selectedData, setSelectedData,
  cartModalOpen, setCartModalOpen,
  totalPrice, setTotalPrice,
  cartItems, setCartItems,
  checkedItems, setCheckedItems,
  quantity, setQuantity
}) {

  useEffect(function () {
    if (!cartItems) return;
    setTotalPrice(fixedDecimal(cartItems
      .filter((_, i) => checkedItems[i])
      .map(e => e.price * e.quantity)
      .reduce((preValue, curValue) => preValue + curValue, 0)
    ));
    if (cartItems.length > checkedItems.length) {
      setCheckedItems([...checkedItems, true]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems, checkedItems]);

  function closeModal() {
    setSelectedData(null);
    setProductModalOpen(false);
  }

  function addItemToCart() {
    const index = cartItems.findIndex(e => e.id === selectedData.id);
    if (index >= 0) {
      setCartItems(cartItems.map(item => item.id === selectedData.id
        ? Object.assign({}, item, { quantity: item.quantity + (quantity ? quantity : 1) })
        : item))
    } else {
      setCartItems([...cartItems, Object.assign({}, selectedData, { quantity: quantity ? quantity : 1 })]);
    }
    closeModal();
  }

  function toggleChecked(index) {
    setCheckedItems(checkedItems.map((item, i) => i === index ? !item : item));
  }

  return (
    <>
      <Modal
        isOpen={productModalOpen}
        onRequestClose={closeModal}
        className="modal-product"
        ariaHideApp={false}
        overlayClassName="overlay"
      >
        {
          selectedData &&
          <div className="scroll-component flex flex-wrap">
            <div className="w-1/2">
              <img className="w-4/5 p-5" alt="Food" src={selectedData.img} />
            </div>
            <div className="w-1/2 pt-8">
              <h1 className="font-semibold text-2xl">{selectedData.name}</h1>
              <span className="text-bold text-2xl">Đơn giá:</span>
              <span className="text-bold text-2xl text-red-800"> {fixedDecimal(selectedData.price)} VNĐ</span>
              <IncDecInput
                isCart={false}
                quantity={quantity}
                setQuantity={setQuantity}
              />
              <div className="flex">
                <button
                  className="btn bg-red-500 hover:bg-red-800"
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
        }
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
        className="modal-cart"
        ariaHideApp={false}
        overlayClassName="overlay"
      >
        <div className="scroll-component">
          {
            cartItems &&
            cartItems.map((item, index) => (
              <div key={item.id} className="flex m-4 p-8 bg-gray-300 rounded-xl">
                <div className="w-1/2">
                  <img className="w-4/5 item-thumbnail" alt="Food" src={item.img} />
                </div>
                <div className="w-2/5">
                  <h1 className="mb-4">
                    {item.name}
                  </h1>
                  <h2>
                    Đơn giá: <span className="text-red-500">{item.price} VNĐ</span>
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
            ))
          }
          <h2 className="text-center">
            Tổng cộng: <span className="font-semibold text-red-700">{totalPrice} VNĐ</span>
          </h2>
          <div className="flex justify-center my-4">
            <button className="btn bg-primarycolor hover:bg-primarybold">Thanh toán</button>
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
