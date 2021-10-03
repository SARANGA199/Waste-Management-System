import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import axios from "axios";

export default function UpdatePoints() {
  const [points, setpoints] = useState();
  const [description, setdescription] = useState();
  const [expdate, setexpdate] = useState();

  const [id, setID] = useState();

  useEffect(() => {
    setID(localStorage.getItem("id"));
    setpoints(localStorage.getItem("points"));
    setdescription(localStorage.getItem("description"));
    setexpdate(localStorage.getItem("expdate"));
  }, []);


  const updateData = () => {
    axios.put(`http://localhost:8070/points/updatePoints/${id}`, {
        points,
        description,
        expdate
    });
  };

  return (
    <div className="container form-cont">
      <form >
        <div className="col-md-4 mb-3">
          <label htmlFor="name" className="form-label">
            points
          </label>
          <input
            type="text"
            className="form-control"
            id="Itemname"
            value={points}
            placeholder="Enter Your Item Name"
            onChange={(e) => {
              setpoints(e.target.value);
            }}
          />
        </div>

        <div className="col-md-1 mb-3">
          <label htmlFor="weight" className="form-label">
          description
          </label>
          <input
            type="text"
            className="form-control"
            id="weight"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            placeholder="Add your description here"
            id="description"
            value={expdate}
            defaultValue={""}
            onChange={(e) => {
              setexpdate(e.target.value);
            }}
          />
        </div>


        <a
          type="submit"
          className="btn btn-warning mb-5"
          href="/displaypts"
          onClick={updateData}
        >
          Update
        </a>
      </form>
    </div>
  );
}