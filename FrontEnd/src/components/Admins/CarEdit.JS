/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const AutoMobileUpdate1 = () => {
  const navigate = useNavigate();

  const [Colour, setColor] = useState("");
  const [Brand, setBrand] = useState("");
  const [Model, setModel] = useState("");
  const [SeatCapacity, setSeatcapacity] = useState("");
  const [CategoryId, setCategoryId] = useState("");
  const [ImgUrl, setImgUrl] = useState("");
  const [Price, setPrice] = useState("");
  const [Fuel, setFuel] = useState("");
  const [Drivingtype, setDrivingtype] = useState("");

  const params = useParams();

  const [data, setData] = useState("");

  const [editColour, editsetColor] = useState("");
  const [editBrand, editsetBrand] = useState("");
  const [editModel, editsetModel] = useState("");
  const [editSeatCapacity, editsetSeatcapacity] = useState("");
  const [editCategoryId, editsetCategoryId] = useState("");
  const [editImgUrl, editsetImgUrl] = useState("");
  const [editPrice, editsetPrice] = useState("");
  const [editFuel, editsetFuel] = useState("");
  const [editDrivingtype, editsetDrivingtype] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5043/api/Cars/${params.id}`, {})
      .then((result) => {
        // Set the fetched data as the initial state
        const itemData = result.data;

        setColor(itemData.Colour);
        setBrand(itemData.Brand);
        setModel(itemData.Model);
        setSeatcapacity(itemData.SeatCapacity);
        setCategoryId(itemData.CategoryId);
        setImgUrl(itemData.ImgUrl);
        setModel(itemData.Model);
        setPrice(itemData.Price);
        setFuel(itemData.Fuel);
        setDrivingtype(itemData.Drivingtype);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.userId]);

  const getData = (id) => {
    axios
      .get(`http://localhost:5043/api/Cars/${id}`, {})
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = () => {
    const url = `http://localhost:5043/api/Cars/`;
    console.log(url + params.id);
    const data = {
      id: params.id,
      colour: editColour !== "" ? editColour : Colour,
      Brand: editBrand !== "" ? editBrand : Brand,
      Model: editModel !== "" ? editModel : Model,
      SeatCapacity: editSeatCapacity != "" ? editSeatCapacity : SeatCapacity,
      CategoryId: editCategoryId !== "" ? editCategoryId : CategoryId,
      ImgUrl: editImgUrl !== "" ? editImgUrl : ImgUrl,
      Price: editPrice !== "" ? editPrice : Price,
      Fuel: editFuel !== "" ? editFuel : Fuel,
      Drivingtype: editDrivingtype !== "" ? editDrivingtype : Drivingtype,
    };

    axios
      .put(url + params.id, data, {})
      .then((result) => {
        getData(params.id);
        navigate("/AdminMenu");
      })
      .catch((error) => {
        console.log("not updated");
      });
    navigate("/AdminMenu");
  };

  return (
    <div>
      <form>
        <h2>Edit User:</h2>

        <label>
          Colour:
          <input
            type="text"
            name="editColour"
            value={editColour}
            placeholder={Colour}
            onChange={(e) => editsetColor(e.target.value)}
          />
        </label>
        <label>
          Brand:
          <input
            type="text"
            name="editBrand"
            value={editBrand}
            placeholder={Brand}
            onChange={(e) => editsetBrand(e.target.value)}
          />
        </label>
        <label>
          Model:
          <input
            type="text"
            name="editModel"
            value={editModel}
            placeholder={Model}
            onChange={(e) => editsetModel(e.target.value)}
          />
          {/* <input type="tel" name="MobileNo" value={formData.Mobileno} onChange={handleChange} /> */}
        </label>
        <label>
          CategoryId:
          <input
            type="text"
            name="editCategoryId"
            value={editCategoryId}
            placeholder={CategoryId}
            onChange={(e) => editsetCategoryId(e.target.value)}
          />
        </label>

        <label>
          ImgUrl:
          <input
            type="text"
            name="editImgUrl"
            value={editImgUrl}
            onChange={(e) => editsetImgUrl(e.target.value)}
          />
        </label>

        <label>
          Price:
          <input
            type="text"
            name="editPrice"
            value={editPrice}
            placeholder={Price}
            onChange={(e) => editsetPrice(e.target.value)}
          />
        </label>

        <label>
          Fuel:
          <input
            type="text"
            name="editFuel"
            value={editFuel}
            placeholder={Fuel}
            onChange={(e) => editsetFuel(e.target.value)}
          />
        </label>

        <label>
          Drivingtype:
          <input
            type="text"
            name="editDrivingtype"
            value={editDrivingtype}
            placeholder={Drivingtype}
            onChange={(e) => editsetDrivingtype(e.target.value)}
          />
        </label>

        <button onClick={() => handleUpdate()} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AutoMobileUpdate1;
