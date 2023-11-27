import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../../redux/features/CartSlice";

const CarTable = () => {
  const automobiles = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
   console.log(automobiles);
  const pricePerDay = automobiles.reduce(
    (acc, product) => acc + parseFloat(product.Price),
    0
  );
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  const [numberOfDays, setNumberOfDays] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const handleRemoveItem = (automobile) => {
    dispatch(removeItem({ id: automobile.Car_id, ...automobile }));
  };
  const handleDeleteAll = () => {
    dispatch(clearCart());
  };
  useEffect(() => {
    const pickup = new Date(pickupDate);
    const dropoff = new Date(dropoffDate);

    // Check if both dates are valid
    if (
      isNaN(pickup.getTime()) ||
      isNaN(dropoff.getTime()) ||
      pickup >= dropoff
    ) {
      return;
    }

    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const days = Math.round(Math.abs((dropoff - pickup) / oneDay));

    setNumberOfDays(days);
    setTotalCost(days * pricePerDay);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [automobiles, pickupDate, dropoffDate]);

  const updateDatesAndCalculateTotal = (pickup, dropoff) => {
    // Check if both dates are valid
    if (
      isNaN(pickup.getTime()) ||
      isNaN(dropoff.getTime()) ||
      pickup >= dropoff
    ) {
      return;
    }

    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const days = Math.round(Math.abs((dropoff - pickup) / oneDay));

    setNumberOfDays(days);
    setTotalCost(days * pricePerDay);
    console.log(totalCost); // You can set totalCost in state if needed
  };

  const handlePickupDateChange = (e) => {
    const newPickupDate = new Date(e.target.value);
    setPickupDate(e.target.value);
    updateDatesAndCalculateTotal(newPickupDate, new Date(dropoffDate));
  };

  const handleDropoffDateChange = (e) => {
    const newDropoffDate = new Date(e.target.value);
    setDropoffDate(e.target.value);
    updateDatesAndCalculateTotal(new Date(pickupDate), newDropoffDate);
  };

  return automobiles?.length === 0 ? (
    <>
      <div>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-slate-100 text-black p-8 rounded shadow-xl">
            <p className="text-2xl font-bold m-10">
              You have not added any Automobiles to Book
            </p>
            <p className="text-2xl  m-10">
              Now you can{" "}
              <Link
                to="/"
                className="text-2xl p-2 rounded-xl bg-blue-500 text-white "
              >
                Home
              </Link>{" "}
              to Book
            </p>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="flex justify-center items-start p-8">
        <div className="w-1/2 pr-8">
          <table className="table-auto w-full">
            <thead className="justify-center">
              <td></td>
              <td></td>
              <button
                onClick={() => handleDeleteAll()}
                className="bg-red-500 p-2 rounded-xl shadow-2xl text-white"
              >
                Delete All
              </button>
            </thead>
            <tbody>
              {automobiles.map((item) => (
                <tr key={item.CardId} className="shadow-lg  rounded-xl">
                  <td className="py-3 pl-8">
                    <img
                      className="w-[250px] rounded-xl "
                      alt="img"
                      src={"http://localhost:5043/img/" + item.ImgUrl}
                    />
                  </td>
                  <td className="p-2">
                    <ul>
                      <li className="font-bold text-2xl">
                        {item.Brand + " "}
                        {"" + item.Model}
                      </li>
                      <li>{item.SeatCapacity + " Seater"}</li>
                      <li className="font-bold text-lg">
                        {"₹ " + item.Price + "/Day"}
                      </li>
                    </ul>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="p-1"
                      onClick={() => handleRemoveItem(item)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash3-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                      </svg>
                    </button>
                  </td>

                  <td>{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-1/2 pl-8 justify-center">
          <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">Check Out</h2>

            <label className="block text-gray-700 text-sm font-bold mb-2">
              Pick-up Date:
            </label>
            <input
              type="date"
              value={pickupDate}
              onChange={handlePickupDateChange}
              className="block w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />

            <label className="block mt-4 text-gray-700 text-sm font-bold mb-2">
              Drop-off Date:
            </label>
            <input
              type="date"
              value={dropoffDate}
              onChange={handleDropoffDateChange}
              className="block w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />

            <p className="mt-4">Number of Days: {numberOfDays}</p>
            {/* Total Cost can be displayed here without tracking it in state */}

            <h3 className="text-2xl font-extrabold m-3">
              Total Price : {"₹  " + totalCost}
            </h3>
            <button
              type="submit"
              className="bg-blue-500 text-3xl font-extrabold text-white p-2 rounded-md hover:bg-blue-700"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CarTable;
