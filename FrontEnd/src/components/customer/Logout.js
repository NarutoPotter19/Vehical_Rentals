import React from 'react';
import {useNavigate} from "react-router-dom";
 
const Logout = () => {
    const navigate = useNavigate();
 
  const handleLogoutAction = () => {
    
    localStorage.removeItem('token');
 
   
    navigate("/"); 
  };
 
  return (
    <button type="button" onClick={handleLogoutAction} className="primary-button">
      Logout
    </button>
  );
};
 
export default Logout;
