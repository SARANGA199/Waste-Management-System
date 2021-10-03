import React, { useState,useEffect } from "react";
import axios from "axios";
import { useHistory } from 'react-router';
import './Styles/points.css'

export default function AddPoints() {

  let history = useHistory();

  const [uid, setuid] = useState("");
  const [uname, setuname] = useState("");
  const [points, setpoints] = useState("");
  const [description,setdescription] = useState("");
  const [date, setdate] = useState("");

  useEffect(() => {

    setuid(localStorage.getItem('uid'));
    setuname(localStorage.getItem('username'))

},[] );


  function sendData(e) {
    e.preventDefault();

    const newRequest = {
      uid,
      uname,
      points,
      description,
      date
    };

    axios
      .post(`/points/${uid}/addPoints`,newRequest)
      .then(() => {
        alert("ponits are added");
        history.push('/displaypts');
        e.target.reset(); // to clear input field after the submission
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container form-cont">
      <div className="addform1"><h1>Loyalty Points </h1></div>
      <form onSubmit={sendData}>

        <div className="col-md-2 mb-3">
          <label htmlFor="name" className="form-label">
            Add points
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="Itemname"
            placeholder="Enter the amount of points here"
            onChange={(e) => {
              setpoints(e.target.value);
            }}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="des" className="form-label">
            Comments
          </label>
          <textarea
            type="text"
            className="form-control"
            id="Itemname"
            placeholder="Enter the amount of points here"
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
        </div>
        <div className="col-md-2 mb-3">
          <label htmlFor="weight" className="form-label">
            Expire date
          </label>
          <input
          required
            type="date"
            className="form-control"
            id="weight"
            onChange={(e) => {
              setdate(e.target.value);
            }}
          />
        </div>

        <hr className="col-md-4 mb-5" />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}