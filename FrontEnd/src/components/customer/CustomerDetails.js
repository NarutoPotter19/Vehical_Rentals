// import React, { useContext, useEffect, useState } from 'react'
// import { AuthContext } from '../utils/AuthContext';
// import { jwtDecode } from 'jwt-decode';
// import axios from 'axios';
 
// export const CustomerDetails = () => {
//     const {isLoggedIn, username} = useContext(AuthContext);
//     const [customerDetails, setCustomerDetails] = useState(null);
//     useEffect(() => {
//       // Example token (replace with your actual token)
//       const token =
//         localStorage.getItem('token');
 
//       // Decode the token to extract information
//       const decodedToken = jwtDecode(token);
 
//       // Extract customerId from decoded token
//       const customerId = decodedToken.CustomerId;
//       //  const name=decodedToken.Name;
//         console.log(customerId);
 
//         const fetchCustomerDetails = async () => {
//           try {
//             // Make the GET request with the specified parameters
//             const response = await axios.get(
//               `http://localhost:5043/api/Customers/${customerId}`,
//               {
//                 params: {
//                   fields: 'Name,Age,License,Address1', // Specify desired fields
//                 },
//               }
//             );
 
//             // Set the retrieved customer details to state
//             setCustomerDetails(response.data);
//           } catch (error) {
//             console.error('Error fetching customer details:', error);
//           }
//         };
 
//         fetchCustomerDetails();
//     }, []);
//     console.log(customerDetails);
 
//   return (
//     <div>{username.username}
//     <p>{customerDetails.Name}</p>
//     </div>
//   )
// }
 
//
import {jwtDecode} from 'jwt-decode';
import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
 
import {Form, Button, Container, Alert} from 'react-bootstrap';
 
//import "./update.css";
 
const CustomerDetails = () => {
//   const {id} = useParams();
 
  const navigate = useNavigate();
 
  const [userData, setUserData] = useState({
    CustomerId: '',
    Name: '',
    Address1: '',
    License: '',
    Age: '',
    Username: '',
    Password: '',
    Phone: '',
  });
var temp=0;
  useEffect(() => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const customerId = decodedToken.CustomerId;
    temp=customerId;
   // const editURL = `http://localhost:5043/api/Customers/${customerId}`;
    axios
      .get(`http://localhost:5043/api/Customers/${customerId}`)
      .then((response) => {
        const Data = response.data;
        setUserData(Data);
        console.log(response.data);
      })
      .catch((error) => {
        alert('Error Ocurred getting Customer detail:' + error);
      });
  }, []);
 
 
  const onChanges = (e) => {
    const {id, value} = e.target;
    console.log(`Updating ${id} to ${value}`);
    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    console.log(e.target.value);
  };
 
  const submitActionHandler = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:5043/api/Customers/${temp}`, 
        userData,
      )
      .then((response) => {
        alert('Profile ' + userData.CustomerId + ' updated!');
        navigate('/read');
      })
      .catch((error) => {
        alert('Error Ocurred updating Customer:' + error);
      });
  };
 
  return (
    <>
      <div className="body p-5">
        <Container>
          <Form onSubmit={submitActionHandler} id="data">
            <div className="content">
              <Form.Group controlId="form.id">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  value={userData.CustomerId}
                  className="bg-gray-200"
                />
              </Form.Group>
              <Form.Group controlId="form.Name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={userData.Name}
                  onChange={onChanges}
                  placeholder="Enter Your Name"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <Form.Group controlId="form.Address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  value={userData.Address1}
                  onChange={onChanges}
                  placeholder="Enter the Address"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <Form.Group controlId="form.License">
                <Form.Label>License No</Form.Label>
                <Form.Control
                  type="text"
                  value={userData.License}
                  onChange={onChanges}
                  placeholder="Enter License"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <br />
 
              <Form.Group controlId="form.Age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="text"
                  value={userData.Age}
                  onChange={onChanges}
                  placeholder="Enter Your Age"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <Form.Group controlId="form.Username">
                <Form.Label>UserName</Form.Label>
                <Form.Control
                  type="text"
                  value={userData.Username}
                  onChange={onChanges}
                  placeholder="Enter UserName"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <Form.Group controlId="form.Password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  value={userData.Password}
                  onChange={onChanges}
                  placeholder="Change Your Password"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <Form.Group controlId="form.Phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  value={userData.Phone}
                  onChange={onChanges}
                  placeholder="Please enter your phone number"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
 
              <br />
              <Button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Update Customer
              </Button>
              <Button
                type="button"
                onClick={() => navigate('/patienthome')}
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
export default CustomerDetails;
 