/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

const AdminPage = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/Admin/Automobile");
  };

  const handleuser = () => {
    navigate("/Admin/AuthorizedComponent");
  };

  const handleReservations = () => {
    navigate("/Admin/ReservationDetails");
  };

  const handleEditAutoM = () => {
    navigate("/Admin/Amadmin");
  };
  const calculateImageDimensions = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const width = 3 * screenWidth;
    const height = (3 / 4) * screenHeight;
    return { width, height };
  };

  return (
    <>
      <div>
        <div className="justify-center flex my-[250px]">
          <button
            onClick={() => handleAdd()}
            className="p-3 m-3 mx-4 rounded-xl text-3xl text-white bg-blue-500"
          >
            Add Automobile
          </button>

          <button
            onClick={() => handleuser()}
            className="p-3 m-3 mx-4 rounded-xl text-3xl text-white  bg-blue-500"
          >
            Users Details
          </button>

          <button
            onClick={() => handleReservations()}
            className="add-button"
          ></button>

          <button
            onClick={() => handleEditAutoM()}
            className="p-3 m-3 mx-4 text-3xl text-white rounded-xl bg-blue-500"
          >
            Update Automobiles
          </button>
        </div>
      </div>
    </>
  );
};
export default AdminPage;
