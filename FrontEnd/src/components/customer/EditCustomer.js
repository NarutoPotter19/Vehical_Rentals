import {jwtDecode} from 'jwt-decode';
import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
 
import {Form, Button, Container, Alert} from 'react-bootstrap';
 
//import "./update.css";
 
const CustomerDetails = () => {
  const navigate = useNavigate();
  const [customerId, setcustomerid] = useState();
  const [name, setname] = useState('');
  const [address1, setaddress] = useState('');
  const [license, setlisence] = useState('');
  const [age, setage] = useState('');
  const [username, setusername] = useState('');
  const[password,setpassword]=useState('');
  const [phone, setphone] = useState('');
  const[userType,setusertype]=useState('');
 
 
 var temp='';
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
     temp = decodedToken.CustomerId;
    console.log(temp);
    // const editURL = `http://localhost:5043/api/Customers/${customerId}`;
    axios
      .get(`http://localhost:5043/api/Customers/${temp}`)
      .then((response) => {
        const Data = response.data;
        setcustomerid(Data.CustomerId)
        setname(Data.Name);
        setaddress(Data.Address1);
        setlisence(Data.License);
        setage(Data.Age);
        setusername(Data.Username);
        setphone(Data.Phone);
        setpassword(Data.Password);
        setusertype(Data.UserType);
       
      
      })
      .catch((error) => {
        alert('Error Ocurred getting Customer detail:' + error);
      });
  }, []);
 
  
  const data={
    CustomerId:customerId,
    Name:name,
    Address1:address1,
    License:license,
    Age:age,
    Username:username,
    Phone:phone,
    Password:password,
    UserType:userType

  };
  console.log(data);
 
  const submitActionHandler = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:5043/api/Customers/${customerId}`, data)
      .then((response) => {
        alert('Profile updated!');
        navigate('/');
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
                  value={customerId}
                  className="bg-gray-200"
                />
              </Form.Group>
              <Form.Group controlId="form.Name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e)=>{setname(e.target.value)}}
                  placeholder="Enter Your Name"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <Form.Group controlId="form.Address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  value={address1}
                  onChange={(e)=>{setaddress(e.target.value)}}
                  placeholder="Enter the Address"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <Form.Group controlId="form.License">
                <Form.Label>license No</Form.Label>
                <Form.Control
                  type="text"
                  value={license}
                  onChange={(e)=>{setlisence(e.target.value)}}
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
                  value={age}
                  onChange={(e)=>{setage(e.target.value)}}
                  placeholder="Enter Your Age"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <Form.Group controlId="form.Username">
                <Form.Label>username</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e)=>{setusername(e.target.value)}}
                  placeholder="Enter UserName"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <Form.Group controlId="form.Username">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  value={password}
                  onChange={(e)=>{setpassword(e.target.value)}}
                  placeholder="Enter pasword"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
             
              <Form.Group controlId="form.Phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  value={phone}
                  onChange={(e)=>{setphone(e.target.value)}}
                  placeholder="Please enter your phone number"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
               </Form.Group>
              <Form.Group controlId="form.Phone">
                <Form.Label>User Type</Form.Label>
                <Form.Control
                  type="text"
                  value={userType}
                  onChange={(e)=>{setusertype(e.target.value)}}
                  placeholder="Please enter your Usertype"
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
                onClick={() => navigate('/')}
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