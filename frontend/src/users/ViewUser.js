import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function ViewUser() {

    let [user, setUser] = useState(
     {
        fullname: "",
        email: "",
        password: "",
        sex: ""
     }
    );

    let {id} = useParams();

    useEffect(() => {
        loadUser();
    }, [])

    let loadUser = async() => {
        let result = await axios.get(`http://localhost:8080/api/students/${id}`)
       setUser(result.data);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">User Details</h2>


                    <div className="card">
                        <div className="card-header">
                        <span>Detail of user id: </span>
                            <ul className="list-group list-group-flush">
                                 <li className="list-group-item">
                                    Name: {user.fullname}
                                 </li>  
                                 <li className="list-group-item">
                                    Email: {user.email}
                                 </li>   
                                 <li className="list-group-item">
                                    Password: {user.password}
                                 </li>   
                                 <li className="list-group-item">
                                    Sex: {user.sex}
                                 </li>                                           
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-outline-primary" to={"/"}> Back to home</Link>
                </div>
            </div>
        </div>
    )
}