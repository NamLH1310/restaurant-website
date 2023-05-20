import { useContext } from 'react'
import { ContextList } from '../Context'

function timeDisplay(time) {
  var res;
  time = time.split('.')[0]
  res = time.replace('T', ' ').replace('Z', '').split(' ')
  res = res[1] + " " + res[0].split('-').reverse().join('/')
  return res;
}
function Order(emp) {
  const { setOrderModalOpen } = useContext(ContextList);
  return (
    <tr>
      <td className="border-collapse border border-gray-900 bg-yellow-200 text-center font-medium">
        {emp.value.id}
      </td>
      <td className="border-collapse border border-gray-900 bg-white text-center font-medium">
        {emp.value.name}
      </td>
      <td className="border-collapse border border-gray-900 bg-white text-center font-medium">
        {emp.value.cost.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
      </td>
      <td className="border-collapse border border-gray-900 bg-white text-center font-medium h-14">
        {timeDisplay(emp.value.time)}
      </td>
      <td className="border-collapse border border-gray-900 bg-white text-center font-medium h-14">
        {emp.value.phone_number}
      </td>
      <td className="border-collapse border border-gray-900 bg-white text-center font-medium">
        <button
          className=" h-3/4 w-2/3 py-[6px] text-red-100 transition-colors duration-150 bg-red-500  focus:shadow-outline hover:bg-red-800"
          onClick={() => {
           setOrderModalOpen(true)
          }}
        >
          Xem đơn
        </button>
      </td>
    </tr>
  );
}
export default Order;
