import React, { useState, useEffect } from "react";
import AutomobileCard from "../Headers/AutomobileCard";
import axios from "axios";
import useOnline from "../../utils/useOnline";
import Shimmer from "../Headers/Shimmer";

const Automobilefilter = () => {
  const apiLink = "http://localhost:5043/api/Cars";

  const [automobiles, setAutomobiles] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    getApiData();
  }, []);

  async function getApiData() {
    try {
      const response = await axios.get(apiLink);
      setAutomobiles(response.data);
      setFilteredCars(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const offline = useOnline();

  if (!offline) {
    return (
      <h1 className="text-5xl">
        You are offline. Please check your internet connection.
      </h1>
    );
  }

  const displayObjectsByCategory = (categoryId) => {
    if (categoryId === 5) {
      // If the same category is selected again, show all cars
      setFilteredCars(automobiles);
    } else {
      // Filter cars based on the selected category
      const filteredObjects = automobiles.filter(
        (obj) => obj.CategoryId === categoryId
      );
      setFilteredCars(filteredObjects);
      setSelectedCategory(categoryId);
    }
  };

  return (
    <>
      <div className="">
        <h1 className="font-extrabold m-5 text-justify text-2xl">
          All Automobiles Available for Rent
        </h1>
        <div className="justify-center flex font-extrabold text-white">
          <button
            className="p-4 rounded-lg bg-blue-500 m-2 font-extrabold text-white"
            onClick={() => displayObjectsByCategory(1)}
          >
            {" "}
            Cars
          </button>
          <button
            className="p-4 rounded-lg  bg-blue-500 m-2 font-extrabold text-white"
            onClick={() => displayObjectsByCategory(2)}
          >
            Bikes
          </button>
          <button
            className="p-4 rounded-lg bg-blue-500 m-2 font-extrabold text-white"
            onClick={() => displayObjectsByCategory(3)}
          >
            Minivas
          </button>
          <button
            className="p-4 rounded-lg bg-blue-500 m-2 font-extrabold text-white"
            onClick={() => displayObjectsByCategory(4)}
          >
            Buses
          </button>
          {/* Add more buttons for other categories as needed */}
          <button
            className="p-4 rounded-lg bg-blue-500 m-2 font-extrabold text-white"
            onClick={() => displayObjectsByCategory(5)}
          >
            Show All
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-2">
        {filteredCars?.length === 0 ? (
          <Shimmer />
        ) : (
          filteredCars.map((automobile) => (
            <AutomobileCard key={automobile.CarId} {...automobile} />
          ))
        )}
      </div>
    </>
  );
};

export default Automobilefilter;
