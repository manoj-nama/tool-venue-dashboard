import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services";
import "./Login.css";

const Login = () => {
  const userName = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await loginUser({
      userName: userName.current.value,
      password: password.current.value,
    });
    localStorage.setItem('auth',data.token);
    navigate("/Home")
    userName.current.value = '';
    password.current.value = '';
  };
  return (
    <div className="container1">
      <div className="card1">
        <div className="inner-card1">
          <p className="text1">Login</p>
        </div>
        <div className="Form">
          <form className="FormDetails" onSubmit={onSubmit}>
            <input type="text" placeholder="UserName" ref={userName} />
            <input type="text" placeholder="Password" ref={password} />
            <div className="button">
            <button className="btn2" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
