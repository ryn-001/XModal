import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, setData] = useState({
    username: "",
    phno: "",
    email: "",
    dob: ""
  });

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.phno.length < 10) {
      alert("Invalid Phone Number. Please enter a 10-digit phone number.");
      return;
    }

    if (new Date(data.dob).getTime() > new Date().getTime()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    alert("Form submitted successfully!");
    handleClose();
  };

  return (
    <div className={open ? "modal" : "not-modal"}>
      <div className="modal-content">
        <h1>User Detail Modal</h1>
        <button onClick={handleOpen}>Open Form</button>

        {open && (
          <div className="overlay" onClick={handleClose}>
            <div
              className="custom-modal"
              onClick={(e) => e.stopPropagation()} 
            >
              <h3>Fill Details</h3>
              <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  id="username"
                  name="username"
                  value={data.username}
                  onChange={handleChange}
                  required
                />
                <br />

                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  placeholder="Enter your Email Address"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
                <br />

                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="number"
                  placeholder="Enter your phone number"
                  id="phone"
                  name="phno"
                  value={data.phno}
                  onChange={handleChange}
                />
                <br />

                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={data.dob}
                  onChange={handleChange}
                />
                <br />

                <button className="submit-button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
