import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser(){
    let navigate = useNavigate();
    let {id} = useParams();


  let [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    sex: "",
  });

  let { fullname, email, password, sex } = user;

  let onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let onSexChange = (e) => {
    setUser({ ...user, sex: e.target.value });
  }

  let onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/students/${id}`, user);
    navigate("/");
  };

  let loadUsers= async () => {
    let result =await axios.get(`http://localhost:8080/api/students/${id}`, user);
    setUser(result.data);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3 form-group">
              <label htmlFor="Name" className="form-label">
                Name:{" "}
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name...."
                name="fullname"
                required
                value={fullname}
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
                Sex:</label>
              <div>
                <input
                  type={"radio"}
                  className="form-checkbox"
                  name="sex"
                  value="famale"
                  checked={sex === "female"}
                  onChange={(e) => onSexChange(e)}
                ></input>
                <label className="form-check-label">Female</label>
              </div>

              <div>
                <input
                  type={"radio"}
                  className="form-checkbox"
                  name="sex"
                  value="male"
                  checked={sex === "male"}
                  onChange={(e) => onSexChange(e)}
                ></input>
                <label className="form-check-label">Male</label>

              </div>

            </div>
            <div className="form-button">
              <button className="btn btn-outline-primary" >Update</button>
              <button className="btn btn-outline-danger mx-2">Log out</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}