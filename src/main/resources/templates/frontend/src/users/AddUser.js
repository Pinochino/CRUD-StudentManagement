import React, { useState } from "react";
import "/WebService/src/main/resources/templates/frontend/src/Style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddUser() {


  let navigate = useNavigate();
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    sex: "",
  });

  let { name, email, password, sex } = user;

  let onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let onSubmit = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/students", user)
    navigate("/");
  };
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form action={(e) => onSubmit(e)}>
            <div className="mb-3 form-group">
              <label htmlFor="Name" className="form-label">
                Name:{" "}
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name...."
                name="name"
                required
                value={name}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3 form-group">
              <label htmlFor="Email" className="form-label">
                Email:{" "}
              </label>
              <input
                type={"email"}
                className="form-control"
                placeholder="Enter your email...."
                name="email"
                required
                value={email}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3 form-group">
              <label htmlFor="Password" className="form-label">
                Password:{" "}
              </label>
              <input
                type={"password"}
                className="form-control"
                placeholder="Enter your password...."
                name="password"
                required
                value={password}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3 form-group">
              <label htmlFor="Password-2" className="form-label">
                Password again:{" "}
              </label>
              <input
                type={"password"}
                className="form-control"
                placeholder="Enter your password...."
                name="password"
                required
                value={password}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3 form-group">
              <label htmlFor="Sex" className="form-label">
                Sex:
                <input
                  type={"checkbox"}
                  className="form-checkbox"
                  name="female"
                  value={sex}
                  onChange={(e) => onInputChange(e)}
                ></input>
                female
                <input
                  type={"checkbox"}
                  className="form-checkbox"
                  name="male"
                  value={sex}
                  onChange={(e) => onInputChange(e)}
                ></input>
                male
              </label>
            </div>
            <div className="form-button">
              <button className="btn btn-outline-primary">Sign in</button>
              <button className="btn btn-outline-dangerm mx-2">Log out</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
