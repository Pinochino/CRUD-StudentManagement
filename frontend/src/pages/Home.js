import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
// import '/frontend/src/Style.css';


export default function Home() {
  let [users, setUser] = useState([]);

  let {id} = useParams();

  useEffect(() => {
    loadUsers();
  }, []);


  let loadUsers = async () => {
    let result = await axios.get("http://localhost:8080/api/students");
    setUser(result.data);
  };

  let deleteUsers = async (id) => {
    let goal = await axios.delete(`http://localhost:8080/api/students/${id}`);
    loadUsers();
  }

  return (
    <div className="container">
      <div className="py-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Fullname</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Sex</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>{index+ 1}</th>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.sex}</td>
                <td>
                    <Link className="btn btn-primary mx-2" to={`/ViewUser/${user.id}`}>View</Link>
                    <Link className="btn btn-outline-primary mx-2"
                    to={`/EditUser/${user.id}`}
                    >Edit</Link>
                    <button className="btn btn-danger mx-2"
                    onClick={() => deleteUsers(user.id)}
                    >Delete</button>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
