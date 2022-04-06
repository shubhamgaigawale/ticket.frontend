import React, { useState } from "react";
import axios from 'axios'

const AddUser = () => {
  let registerUserRequest = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    error: false,
  };

  const [inputData, setInputData] = useState(registerUserRequest);
  const [error, setError] = useState();
  const [messsage, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [role, setRole] = useState([]);

  const handleRoleSelection = (event) => {
    const {
      target: { value },
    } = event;
    setRole(typeof value === "string" ? value.split(",") : value);
  };

  const handleForm = (event) => {
    const { name, value } = event.target;
    setInputData((prevInputData) => ({
      ...prevInputData,
      error: false,
      [name]: value,
    }));
  };

  const handlePostUser = (event) => {
    event.preventDefault();
    const userDetails = {
      firstName: inputData.firstName,
      lastName: inputData.lastName,
      username: inputData.username,
      email: inputData.email,
      password: inputData.password,
      role: role,
    };

    axios.post("http://localhost:8080/api/v1/auth/register", userDetails).then(
      (response) => {
        setMessage(response.data.message);
        console.log(response.data.message)
        setSuccessful(true);
      },
      (error) => {
        console.log("ERROR" + error.toString());
        setMessage(error.toString());
        setSuccessful(false);
      }
    );
  };

  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Register User</h3>
                </div>
                <form onSubmit={handlePostUser}>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={inputData.firstName}
                        className="form-control"
                        id="firstName"
                        placeholder="Enter First Name"
                        onChange={handleForm}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        onChange={handleForm}
                        value={inputData.lastName}
                        className="form-control"
                        id="lastName"
                        placeholder="Enter Last Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        onChange={handleForm}
                        value={inputData.email}
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Username</label>
                      <input
                        type="text"
                        name="username"
                        required
                        onChange={handleForm}
                        value={inputData.username}
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        required
                        onChange={handleForm}
                        value={inputData.password}
                        className="form-control"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="role">Role</label>
                      <select
                        className="select2"
                        name="role"
                        required
                        onChange={handleRoleSelection}
                        value={inputData.role}
                        id="role"
                        multiple="multiple"
                        data-placeholder="Select Role"
                        style={{ width: "100%" }}
                      >
                        <option>Admin</option>
                        <option>Developer</option>
                        <option>Tester</option>
                        <option>System Admin</option>
                        <option>Project Manager</option>
                        <option>Support Engineer</option>
                      </select>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddUser;
