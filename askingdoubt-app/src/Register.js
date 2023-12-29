import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
    classGrade: "",
    language: "",
    subject: "",
  });
  const [error, setError] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log({ name, value });
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/api/login`, formData)
      .then((result) => {
        // console.log(result);
        navigate("/login");
      })
      .catch((err) => {
        // console.log(err);
        setError(err.message);
      });
  };
  return (
    <div
      className="container"
      style={{ background: "white", margin: "2rem", padding: "2rem" }}
    >
      <div className="main">
        <div>
          <div className="mb-6">
            <h2>
              <center>Register</center>
            </h2>
            <form onSubmit={handleSubmit} className="">
              <div className="mb-3">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  className="form-control round-0"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  className="form-control round-0"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  name="email"
                  value={formData.password}
                  className="form-control round-0"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Type</label>
                <input
                  type="text"
                  name="type"
                  value={formData.type}
                  className="form-control round-0"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>ClassGrade</label>
                <input
                  type="text"
                  name="classGrade"
                  value={formData.classGrade}
                  className="form-control round-0"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Language</label>
                <input
                  type="text"
                  name="language"
                  value={formData.language}
                  className="form-control round-0"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  className="form-control round-0"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                {error ? (
                  <div style={{ color: "red", fontWeight: "600" }}>
                    <p>You are already an existing user !</p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <button type="submit" className="btn btn-success w-100 round-0">
                Register
              </button>
            </form>
            <br />
            <br />
            <div>
              Are You An Existing User? <Link to="/login">Login</Link>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
