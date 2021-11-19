import './../App.css';
import React, { useState, useRef, useEffect } from 'react';

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
        <h1>Thanh toán thành công!</h1>
      </div>
    );
  }

  return (
    <div>
      {error && <div>Có lỗi xảy ra, thanh toán không thành công</div>}
      <h2>
      </h2>
      <div ref={paypalRef} />
    </div>
  );
}
export default Paypal;