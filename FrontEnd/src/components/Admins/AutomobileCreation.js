import React, { useState } from "react";
import axios from "axios";
const Automobile = () => {
  const [autoMobileData, setAutoMobileData] = useState({
    ImgUrl: "",
    CategoryId: "",
    Brand: "",
    Model: "",
    Fuel: "",
    SeatCapacity: "",
    Price: "",
    DrivingType: "",
    Colour: "",
  });
  const change = (e) => {
    const { id, value } = e.target;
    setAutoMobileData((data) => ({
      ...data,
      [id]: value,
    }));
    console.log(autoMobileData.CategoryId);
  };

  const onSubmitForms = async (e) => {
    e.preventDefault();
    try {
      console.log(autoMobileData);
      const response = await axios.post(
        "http://localhost:5043/api/Cars",
        autoMobileData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setAutoMobileData({
      ImgUrl: "",
      CategoryId: "",
      Brand: "",
      Model: "",
      Fuel: "",
      SeatCapacity: "",
      Price: "",
      DrivingType: "",
      Colour: "",
    });
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/4"></div>
        <div className="w-1/2">
          <form onSubmit={onSubmitForms} className="m-5 p-5">
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="category "
              >
                Select Automobile Type:
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="CategoryId"
                onChange={change}
                value={autoMobileData.CategoryId || ""}
              >
                <option id="" value="" disabled>
                  Select Category
                </option>
                <option
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  id="1"
                  value="1"
                >
                  Car
                </option>
                <option
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  id="2"
                  value="2"
                >
                  Bike
                </option>
                <option
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  id="3"
                  value="3"
                >
                  Minivan
                </option>
                <option
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  id="4"
                  value="4"
                >
                  Bus
                </option>
              </select>
              <label
                className="block font-semibold text-gray-700 mb-2"
                for="ImgUrl"
              >
                ImgUrl
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ImgUrl"
                type="text"
                value={autoMobileData.ImgUrl}
                onChange={change}
                placeholder="Enter your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-semibold text-gray-700 mb-2"
                for="Brand"
              >
                Brand
              </label>

              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Brand"
                type="text"
                value={autoMobileData.Brand}
                onChange={change}
                required
                placeholder="Enter your Brand"
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-semibold text-gray-700 mb-2"
                for="Model"
              >
                Model
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Model"
                type="text"
                value={autoMobileData.Model}
                onChange={change}
                required
                placeholder="Enter your Model"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="category"
              >
                Select Fuel Type:
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="Fuel"
                onChange={change}
                value={autoMobileData.Fuel || ""}
              >
                <option id="" value="" disabled>
                  Select Category
                </option>
                <option
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  id="Petrol"
                  value="Petrol"
                >
                  Petrol
                </option>
                <option
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  id="Diesel"
                  value="Diesel"
                >
                  Diesel
                </option>
                <option
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  id="Electric Vehicle"
                  value="Electric Vehicle"
                >
                  Electric Vehicle
                </option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block font-semibold text-gray-700 mb-2"
                for="SeatCapacity"
              >
                SeatCapacity
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                id="SeatCapacity"
                required
                type="number"
                onChange={change}
                value={autoMobileData.SeatCapacity}
                placeholder="Enter your seat capacity"
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-semibold text-gray-700 mb-2"
                for="Price"
              >
                Price
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                id="Price"
                required
                type="number"
                onChange={change}
                value={autoMobileData.Price}
                placeholder="Enter your Price per Day"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="Driving Type"
              >
                Select Driving Type:
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="DrivingType"
                onChange={change}
                value={autoMobileData.DrivingType || ""}
              >
                <option id="" value="" disabled>
                  Select Category
                </option>
                <option
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  id="Manual"
                  value="Manual"
                >
                  Manual
                </option>
                <option
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  id="Automatic"
                  value="Automatic"
                >
                  Automatic
                </option>
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block font-semibold text-gray-700 mb-2"
                for="Colour"
              >
                Colour
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                id="Colour"
                required
                type="text"
                onChange={change}
                value={autoMobileData.Colour}
                placeholder="Enter your automobile colour"
              />
            </div>
            <button
              className="p-2 rounded-lg bg-sky-700 text-white"
              type="submit"
            >
              {" "}
              Submit
            </button>
          </form>
        </div>
        <div className="w-1/4"></div>
      </div>
    </>
  );
};
export default Automobile;
