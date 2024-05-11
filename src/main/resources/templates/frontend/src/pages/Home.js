import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  let [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  let loadUsers = async () => {
    let result = await axios.get("http://localhost:8080/api/students");
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>{index+ 1}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                    <button className="btn btn-primary mx-2">View</button>
                    <button className="btn btn-outline-primary mx-2">Edit</button>
                    <button className="btn btn-primary mx-2">Delete</button>
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
