import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services";
import { useEffect } from "react";
import "./Login.css";

const Login = () => {
  const userName = useRef();
  const password = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem('auth');
    if (userToken) {
      navigate('/dashboard');
    }
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!userName.current.value || !password.current.value)
      return;

    try {
      const data = await loginUser({
        userName: userName.current.value,
        password: password.current.value
      });
      if (!data || !data.token) throw 'Token is missing';
      localStorage.setItem('auth', data.token);
      navigate("/dashboard")

    }
    catch (error) {
      console.log('Error : ', error);

    }
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
            <input type="password" placeholder="Password" ref={password} />
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
