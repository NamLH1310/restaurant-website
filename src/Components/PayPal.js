import './../App.css';
import React, { useRef, useEffect } from 'react';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';

function toDateTimeField(time) {
  return time.toLocaleDateString().split('/').reverse().join('-') + " " + time.toLocaleTimeString()
}
function Paypal(props) {

  const paypalRef = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: props.invoice.description,
                amount: {
                  currency_code: 'USD',
                  value: props.invoice.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          axios.post(
            'http://127.0.0.1:8000/api/orders/',
            {
              name: props.name,
              cost: props.cost,
              // time: toDateTimeField(new Date()),
              phone_number: props.phoneNumber
            }
          ).then(res => {
            console.log(res.data)
            props.setOrders();
          }).catch(res => {
            alert(res)
          })
          NotificationManager.success('Đơn hàng đã được thanh toán', 'Giỏ hàng', 2000)
        },
        onError: err => {
          console.error(err);
          NotificationManager.error('Có lỗi xảy ra, không thể thực hiện thanh toán', 'Thanh toán', 1000)
        },
      })
      .render(paypalRef.current);
  }, [props.invoice.description, props.invoice.price]);

  return (
    <div>
      <div ref={paypalRef} />
    </div>
  );
}
export default Paypal;