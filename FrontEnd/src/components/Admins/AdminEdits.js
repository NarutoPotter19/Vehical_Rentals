import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Amadmin() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [deleteMessage, setDeleteMessage] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  // const getData = () => {
  //   axios
  //     .get(`http://localhost:5043/api/Cars`)
  //     .then((result) => {
  //       setData(result.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const handleEdit = (CarId) => {
    navigate(`${CarId}`);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`http://localhost:5043/api/Cars`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDelete = async (CarId) => {
    if (window.confirm("Are you sure to delete this Item") === true) {
      axios
        .delete(`http://localhost:5043/api/Cars/${CarId}`)
        .then((result) => {
          setData((prevItems) => prevItems.filter((item) => item.id !== CarId));
          getData();
          console.log("del");
          if (result.status === 200) {
            setDeleteMessage("Deleted");
            setTimeout(() => {
              setDeleteMessage(null);
              getData();
            }, 3000);
          }
        })

        .catch((error) => {
          console.log("not deleted");
        });
    }
  };

  return (
    <>
      <div className="w-1/3"></div>
      <div className="justify-center">
        <div className="users-container justify-center">
          <h2 className="font-extrabold text-4xl m-2 p-2">
            Auto Mobile table:
          </h2>
          <div className="spacer"></div>
        </div>
        {deleteMessage && <div style={{ color: "red" }}>{deleteMessage}</div>}
        <table className="users-table justify-center m-2 p-2">
          <thead>
            <tr>
              <th>CarId</th>
              <th>Colour</th>
              <th>Brand</th>
              <th>Model</th>
              <th>SeatCapacity</th>
              <th>CategoryId</th>
              <th>ImgUrl</th>
              <th>Price</th>
              <th>Fuel</th>
              <th>Drivingtype</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.CarId} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap">{item.CarId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.Colour}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.Brand}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.Model}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.SeatCapacity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.CategoryId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.ImgUrl}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.Price}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.Fuel}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.Drivingtype}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => handleEdit(item.CarId)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleDelete(item.CarId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Amadmin;
