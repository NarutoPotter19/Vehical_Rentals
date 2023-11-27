import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthorizedComponent = () => {
  const navigate = useNavigate();
  const baseURL = "http://localhost:5043/api/Customers";
  const [Users, setusers] = useState([]);

  const setUsersData = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);

      const response = await axios.get(baseURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setusers(response.data);
    } catch (error) {
      alert("Error fetching user details: " + error.message);
    }
  };

  useEffect(() => {
    setUsersData();
  }, []);

  return (
    <div className="card-body">
      <br />
      <br />

      <div className="md:col-span-6">
        <h4 className="text-lg font-semibold">Customer Data</h4>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-3xl font-bold text-black uppercase tracking-wider">
                  CustomerId
                </th>
                <th className="px-6 py-3 text-left text-3xl font-bold text-black uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-3xl font-bold text-black uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-3xl font-bold text-black uppercase tracking-wider">
                  License
                </th>
                <th className="px-6 py-3 text-left text-3xl font-bold text-black uppercase tracking-wider">
                  Age
                </th>

                <th className="px-6 py-3 text-left text-3xl font-bold text-black uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-3xl font-bold text-black uppercase tracking-wider">
                  UserType
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Users &&
                Users.map((Customer, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {Customer.CustomerId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {Customer.Name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {Customer.Address1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {Customer.License}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {Customer.Age}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {Customer.Phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {Customer.UserType}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuthorizedComponent;
