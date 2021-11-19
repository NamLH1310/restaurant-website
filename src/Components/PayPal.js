import './../App.css';
import React, { useState, useRef, useEffect } from 'react';
import { NotificationManager } from 'react-notifications';

function Paypal({ invoice }) {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();
  console.log(invoice.price)
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: invoice.description,
                amount: {
                  currency_code: 'USD',
                  value: invoice.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log(order);
        },
        onError: err => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [invoice.description, invoice.price]);

  if (paidFor) {
    return (
      <div>
        {NotificationManager.success('Đơn hàng đã được thanh toán','Giỏ hàng',2000)}
      </div>
    );
  }

  return (
    <div>
      {error && NotificationManager.error('Có lỗi xảy ra, không thể thực hiện thanh toán','Thanh toán',1000)}
      {error? console.log(error) : null}
      <div ref={paypalRef} />
    </div>
  );
}
export default Paypal;