import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.taget.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      email: user.email,
      password: user.password,
    };

    console.log(sendData);

    axios
      .post("", sendData)
      .then((result) => {
        if (result.data.Status === "200") {
          window.localStorage.setItem("email", result.data.Email);
          window.localStorage.setItem(
            "userName",
            result.data.name + "" + result.data.name
          );
          navigate(`/dashboard`);

          // alert('Invalid User');
        } else {
          alert("Invalid User");
        }
      });
  };

  return (
    <div className="main-box">
      <div className="row">
        <div className="col-md-12 text-center">
          {" "}
          <h1> login page</h1>{" "}
        </div>
        <div className="row"></div>
      </div>

      <div className="row">
        <div className="col-md-6"> Email </div>
        <div className="col-md-6">
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={user.email}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6"> Password </div>
        <div className="col-md-6">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={user.password}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 text-center">
          <input
            type="submit"
            name="submit"
            className="btn btn-success"
            value="plese login"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
