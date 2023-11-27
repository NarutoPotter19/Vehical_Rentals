import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { Form, Button, Container } from "react-bootstrap";

const AdminAutomobileEdit = () => {
  const { id } = useParams();
  const editURL = `http://localhost:5043/api/Cars/${id}`;
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    CarId: "",
    Colour: "",
    Brand: "",
    Model: "",
    SeatCapacity: "",
    CategoryId: "",
    ImgUrl: "",
    Price: "",
    Fuel: "",
    Drivingtype: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(editURL);
        setUserData(response.data);
      } catch (error) {
        alert("Error occurred getting Automobile detail: " + error);
      }
    };

    fetchData();
  }, [editURL]);
  const onChange2 = (e) => {
    const { id, value } = e.target.dataset;
    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const onChanges = (e) => {
    console.log(e.target);
    const { id, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const submitActionHandler = async (event) => {
    event.preventDefault();

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.put(editURL, userData);
      alert("Profile " + userData.CarId + " updated!");
      navigate("/read");
    } catch (error) {
      alert("Error occurred updating Customer: " + error);
    }
  };

  return (
    <>
      <div className=" flex justify-center">
        <div className="w-1/4"></div>
        <div className="body w-1/2">
          <Container>
            <Form onSubmit={submitActionHandler} className="m-5 p-5" id="data">
              <div className="content">
                <Form.Group controlId="form.id">
                  <Form.Label className="block mb-2 text-Xl font-medium text-gray-900 dark:text-white">
                    ID
                  </Form.Label>
                  <Form.Control value={userData.CarId || ""} />
                </Form.Group>
                <Form.Group controlId="form.Colour">
                  <Form.Label className="block mb-2 text-Xl font-medium text-gray-900 dark:text-white">
                    Colour
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={userData.Colour || ""}
                    //readOnly
                    onChange={onChange2}
                    placeholder="Enter the CarName"
                    required
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </Form.Group>
                <Form.Group controlId="form.Brand">
                  <Form.Label className="block mb-2 text-Xl font-medium text-gray-900 dark:text-white">
                    Brand
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={userData.Brand || ""}
                    onChange={onChanges}
                    placeholder="Enter the Brand"
                    required
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </Form.Group>
                <Form.Group controlId="form.Model">
                  <Form.Label className="block mb-2 text-Xl font-medium text-gray-900 dark:text-white">
                    Model
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={userData.Model || ""}
                    onChange={onChanges}
                    placeholder="Enter the Model"
                    required
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </Form.Group>
                <Form.Group controlId="form.SeatCapacity">
                  <Form.Label className="block mb-2 text-Xl font-medium text-gray-900 dark:text-white">
                    Seat Capacity
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={userData.SeatCapacity || ""}
                    onChange={onChanges}
                    placeholder="Enter Seat Capacity"
                    required
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="form.CategoryId">
                  <Form.Label className="block mb-2 text-Xl font-medium text-gray-900 dark:text-white">
                    Category ID
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={userData.CategoryId || ""}
                    // readOnly
                    onChange={onChanges}
                    placeholder="Enter Category ID"
                    required
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </Form.Group>
                <Form.Group controlId="form.ImgUrl">
                  <Form.Label className="block mb-2 text-Xl font-medium text-gray-900 dark:text-white">
                    Image URL
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={userData.ImgUrl || ""}
                    onChange={onChanges}
                    placeholder="Enter Image URL"
                    required
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </Form.Group>
                <Form.Group controlId="form.Price">
                  <Form.Label className="block mb-2 text-Xl font-medium text-gray-900 dark:text-white">
                    Price
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={userData.Price || ""}
                    onChange={onChanges}
                    placeholder="Enter Price"
                    required
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </Form.Group>
                <Form.Group controlId="form.Fuel">
                  <Form.Label className="block mb-2 text-Xl font-medium text-gray-900 dark:text-white">
                    Fuel
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={userData.Fuel || ""}
                    onChange={onChanges}
                    placeholder="Enter Fuel"
                    required
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </Form.Group>
                <Form.Group controlId="form.Drivingtype">
                  <Form.Label className="block mb-2 text-Xl font-medium text-gray-900 dark:text-white">
                    Driving Type
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={userData.Drivingtype || ""}
                    onChange={onChanges}
                    placeholder="Enter Driving Type"
                    required
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Update Automobile
                </Button>
                <Button
                  type="button"
                  onClick={() => navigate("/patienthome")}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </Container>
        </div>
        <div className=""> </div>
      </div>
    </>
  );
};

export default AdminAutomobileEdit;
