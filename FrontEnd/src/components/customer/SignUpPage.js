import React, { useState } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import SignUpPageImg from "../assets/SignUpPageImg.jpeg";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [signUpData, setSignUpData] = useState({
    Name: "",
    Address: "",
    License: "",
    Age: "",
    Email: "",
    Phone: "",
    PassWord: "",
    UserType: "Customer",
  });
  const onChanges = (e) => {
    const { id, value } = e.target;
    setSignUpData((preData) => ({
      ...preData,
      [id]: value,
    }));
    console.log(e.target.value);
  };
  const onSubmitForms = async (e) => {
    e.preventDefault();
    const isFormValid = Object.values(signUpData).every(
      (value) => value.trim() !== ""
    );
    if (!isFormValid) {
      console.error("Please fill in all fields before submitting.");
    }
    try {
      // Validate the form data here if needed

      // Send data to the backend using Axios
      const response = await axios.post(
        "http://localhost:5043/api/Customers",
        signUpData
      );
      console.log("Form submitted successfully:", response.data);
      navigate("/signUp/signUpSuccess");
      // Optionally, reset the form after successful submission
      setSignUpData({
        Name: "",
        Address1: "",
        License: "",
        Age: "",
        Username: "",
        Phone: "",
        PassWord: "",
        UserType:""
      });
    } catch (error) {
      console.error("Error submitting form data:", error);

      // Optionally, handle specific errors or display a user-friendly message
    }
  };

  return (
    <>
      <div className="">
        <div
          className="bg-cover bg-center bg-fixed rounded-lg bg-cover-full"
          style={{ backgroundImage: `url(${SignUpPageImg})` }}
        >
          <div className="h-screen flex justify-end mr-10  items-center m-[20px]">
            <div className="bg-white mx-4 p-8 rounded shadow-md mt-20 w-full md:w-2/3 lg:w-1/3">
              <h1 className="text-3xl font-bold mb-8 text-center mt-4">
                Registration
              </h1>
              <form onSubmit={onSubmitForms}>
                <div className="mb-4">
                  <label
                    className="block font-semibold text-gray-700 mb-2"
                    for="name"
                  >
                    Name
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Name"
                    type="text"
                    value={signUpData.Name}
                    onChange={onChanges}
                    placeholder="Enter your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-semibold text-gray-700 mb-2"
                    for="mobilenumber"
                  >
                    Mobile Number
                  </label>

                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Phone"
                    type="number"
                    value={signUpData.Phone}
                    onChange={onChanges}
                    required
                    minLength={10} maxLength={12}
                    placeholder="Enter your Mobile Number"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-semibold text-gray-700 mb-2"
                    for="email"
                  >
                    User Name
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Username"
                    type="text"
                    value={signUpData.Username}
                    onChange={onChanges}
                    required
                    placeholder="Enter your Username"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-semibold text-gray-700 mb-2"
                    for="age"
                  >
                    Age
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Age"
                    type="number"
                    onChange={onChanges}
                    value={signUpData.Age}
                    required
                    maxLength={3}
                    placeholder="Enter your Age"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-semibold text-gray-700 mb-2"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                    id="PassWord"
                    required
                    type={showPassword ? "text" : "password"}
                    onChange={onChanges}
                    minLength={10}
                    value={signUpData.PassWord}
                    placeholder="Enter your password"
                  />
                </div>
                <label>
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={handleTogglePassword}
                  />{" "}
                  Show Password
                </label>
                <div className="mb-4">
                  <label
                    className="block font-semibold text-gray-700 mb-2"
                    for="address"
                  >
                    Address
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Address1"
                    type="text"
                    required
                    value={signUpData.Address1}
                    onChange={onChanges}
                    placeholder="Enter your Address"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-semibold text-gray-700 mb-2"
                    htmlFor="hasLicense"
                  >
                    Do you have a driving license?
                  </label>
                  <div>
                    <label className="mr-2">
                      <input
                        type="radio"
                        name="hasLicense"
                        value="yes"
                        id="License"
                        checked={signUpData.License === "yes"}
                        onChange={onChanges}
                      />{" "}
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="hasLicense"
                        value="no"
                        id="License"
                        checked={signUpData.License === "no"}
                        onChange={onChanges}
                      />{" "}
                      No
                    </label>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block font-semibold text-gray-700 mb-2"
                      for="address"
                    >
                      UserType
                    </label>
                    <input
                      className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="UserType"
                      type="text"
                      required
                      value={signUpData.UserType}
                      onChange={onChanges}
                      placeholder="Enter your UserType"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 mt-2 hover:text-gray-800">
                    Already have Account{" "}
                    <Link to="/signIn" className="text-blue-700 underline">
                      SignIn
                    </Link>
                  </p>
                </div>
                <div className="mb-6">
                  <button
                    className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
