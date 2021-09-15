import "../component.css";
import React, { useState } from "react";
import axios from "axios";

export default function AddRequest() {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState("");
  const [itemLocation, setItemLocation] = useState("");
  const [photo, setPhoto] = useState("");

  //image upload start
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "wasteImages");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/waste123/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setPhoto(file.secure_url);
  };
  //image upload end

  function sendData(e) {
    e.preventDefault();

    const newRequest = {
      itemName,
      category,
      weight,
      description,
      itemLocation,
      photo,
    };

    axios
      .post(
        "http://localhost:8070/marketplace/613728a89f2ac365dc10e9dc/613728a89f2ac365dc10e3ab/addRequest",
        newRequest
      )
      .then(() => {
        alert("Your Item added to the pool");
        e.target.reset(); // to clear input field after the submission
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <div className="col-md-4 mb-3">
          <label htmlFor="name" className="form-label">
            Item name
          </label>
          <input
            type="text"
            className="form-control"
            id="Itemname"
            placeholder="Enter Your Item Name"
            onChange={(e) => {
              setItemName(e.target.value);
            }}
          />
        </div>
        <div className="col-md-2 mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option selected>Select the category</option>
            <option value={"Plastic"}>Plastic</option>
            <option value={"Glass"}>Glass</option>
            <option value={"Metal"}>Metal</option>
            <option value={"Electric"}>Electric</option>
            <option value={"Organic"}>Organic</option>
          </select>
        </div>
        <div className="col-md-1 mb-3">
          <label htmlFor="weight" className="form-label">
            Weight
          </label>
          <input
            type="text"
            className="form-control"
            id="weight"
            placeholder="             kg"
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            placeholder="Add your description here"
            id="description"
            defaultValue={""}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <div className="col-md-3 mb-3">
          <label htmlFor="photo" className="form-label">
            Photo
          </label>
          <input
            className="form-control"
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            onChange={uploadImage}
          />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="itemLocation" className="form-label">
            Item Location
          </label>
          <textarea
            className="form-control"
            placeholder="Add your address here"
            id="itemLocation"
            defaultValue={""}
            onChange={(e) => {
              setItemLocation(e.target.value);
            }}
          />
        </div>
        <hr className="col-md-4 mb-3" />
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="term"
            required
          />
          <label className="form-check-label" htmlFor="same-address">
            I have read and agree to the term & conditions
          </label>
        </div>

        <div className="form-check ">
          <input
            type="checkbox"
            className="form-check-input"
            id="save-info"
            required
          />
          <label className="col-md-4 form-check-label" htmlFor="save-info">
            I agree with the storage and handling of my data
          </label>
        </div>
        <hr className="col-md-4 mb-5" />
        {/* <div className="mb-3">
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          ref = {reRef}
        />
        </div> */}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
