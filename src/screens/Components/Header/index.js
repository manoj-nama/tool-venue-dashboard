import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/logo.svg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="logo">
        <img
          onClick={() => navigate('/dashboard')}
          src={img}
          className="image"
          alt="logo here"
        />
      </div>
    </div>
  )
};

export default Header;