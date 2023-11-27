// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const handleDelete = (CarId) => {
//   if (window.confirm("Are you sure to delete this Item") === true) {
//     axios
//       .delete(`http://localhost:5043/api/Cars/${CarId}`)
//       .then((result) => {
//         console.log("del");
//         if (result.status === 200) {
//           setDeleteMessage("Deleted");
//            setTimeout(() => {
//               setDeleteMessage(null);
//             getData();
//           }, 3000);
//         }
//       })
//       .catch((error) => {
//         //   toast.error(error)
//         console.log("not deleted");
//       });
//   }

//   return (
//     <button onClick={() => handleDelete()} className="add-button">
//       Add
//     </button>
//   );
// };



import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

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
  if (window.confirm('Are you sure to delete this Item') === true) {
    axios
      .delete(`http://localhost:5043/api/Cars/${CarId}`)

      .then((result) => {
        setData((prevItems) => prevItems.filter((item) => item.id !== CarId));
        getData();
        console.log('del');
        if (result.status === 200) {
          setDeleteMessage('Deleted');
          setTimeout(() => {
            setDeleteMessage(null);
            getData();
          }, 3000);
        }
      })
      .catch((error) => {
        //   toast.error(error)
        console.log('not deleted');
      });
  }
};