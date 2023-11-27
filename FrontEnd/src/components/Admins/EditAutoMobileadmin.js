import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { Form, Button, Container } from "react-bootstrap";

const AutoMobileUpdate = () => {
  const { id } = useParams();
  const editURL = `http://localhost:5043/api/Cars/${id}`;
  const navigate = useNavigate();

  const [color, setcolor] = useState("");
  const [brand, setbrand] = useState("");
  const [catid, setcatid] = useState("");
  const [model, setmodel] = useState("");
  const [seatcap, setseatcap] = useState("");
  const [price, setprice] = useState("");
  const [fuel, setfuel] = useState("");
  const [drivingtype, setdrivingtype] = useState("");
  const [ImgUrl, setImgUrl] = useState();
  useEffect(() => {
    axios
      .get(editURL)
      .then((response) => {
        const Data = response.data;

        setbrand(Data.Brand);
        setcolor(Data.Colour);
        setcatid(Data.CategoryId);
        setmodel(Data.Model);
        setseatcap(Data.SeatCapacity);
        setprice(Data.Price);
        setfuel(Data.Fuel);
        setdrivingtype(Data.Drivingtype);
        setImgUrl(Data.ImgUrl);
        console.log(Data);
      })
      .catch((error) => {
        alert("Error Ocurred getting Automobile detail:" + error);
      });
  }, [id]);

  const data = {
    carId: id,
    colour: color,
    brand: brand,
    categoryId: catid,
    model: model,
    seatCapacity: seatcap,
    price: price,
    fuel: fuel,
    drivingtype: drivingtype,
    imgUrl: ImgUrl,
  };

  const submitActionHandler = (event) => {
    event.preventDefault();
    axios
      .put(editURL, data)
      .then((response) => {
        navigate("/Admin/Amadmin");
      })
      .catch((error) => {
        alert("Error Ocurred updating Customer:" + error);
      });
  };

  return (
    <><div className=""></div>
      <div className="body">
        <Container>
          <Form onSubmit={submitActionHandler} id="data">
            <div className="content">
              <Form.Group controlId="form.id">
                <Form.Label>ID</Form.Label>
              </Form.Group>
              <Form.Group controlId="form.Name">
                <Form.Label>Colour</Form.Label>
                <Form.Control
                  type="text"
                  value={color}
                  onChange={(e) => {
                    setcolor(e.target.value);
                  }}
                  placeholder="Enter Your Name"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <Form.Group controlId="form.Address">
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  type="text"
                  value={brand}
                  onChange={(e) => {
                    setbrand(e.target.value);
                  }}
                  placeholder="Enter the Address"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <Form.Group controlId="form.Address">
                <Form.Label>ImgUrl</Form.Label>
                <Form.Control
                  type="text"
                  value={ImgUrl}
                  onChange={(e) => {
                    setImgUrl(e.target.value);
                  }}
                  placeholder="Enter the Image Path"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <Form.Group controlId="form.Username">
                <Form.Label>CategoryId</Form.Label>
                <Form.Control
                  type="text"
                  value={catid}
                  onChange={(e) => setcatid(e.target.value)}
                  placeholder="Enter UserName"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <Form.Group controlId="form.License">
                <Form.Label>Model</Form.Label>
                <Form.Control
                  type="text"
                  value={model}
                  onChange={(e) => setmodel(e.target.value)}
                  placeholder="Enter License"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <br />

              <Form.Group controlId="form.Age">
                <Form.Label>SeatCapacity</Form.Label>
                <Form.Control
                  type="text"
                  value={seatcap}
                  onChange={(e) => setseatcap(e.target.value)}
                  placeholder="Enter Your Age"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>

              <Form.Group controlId="form.Phone">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  value={price}
                  onChange={(e) => setprice(e.target.value)}
                  placeholder="Please enter your phone number"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>

              <Form.Group controlId="form.Phone">
                <Form.Label>Fuel</Form.Label>
                <Form.Control
                  type="text"
                  value={fuel}
                  onChange={(e) => setfuel(e.target.value)}
                  placeholder="Please enter your phone "
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>

              <Form.Group controlId="form.Phone">
                <Form.Label>DrivingType</Form.Label>
                <Form.Control
                  type="text"
                  value={drivingtype}
                  onChange={(e) => setdrivingtype(e.target.value)}
                  placeholder="Please enter your phone "
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>

              <br />
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
    </>
  );
};
export default AutoMobileUpdate;
