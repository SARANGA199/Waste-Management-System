import "../component.css";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import axios from "axios";

export default function UpdateRequest() {
  const [itemName, setItemName] = useState();
  const [category, setCategory] = useState();
  const [weight, setWeight] = useState();
  const [description, setDescription] = useState();
  const [itemLocation, setItemLocation] = useState();
  const [photo, setPhoto] = useState();

  const [_id, setID] = useState();
  let history = useHistory();

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setItemName(localStorage.getItem("itemName"));
    setCategory(localStorage.getItem("category"));
    setWeight(localStorage.getItem("weight"));
    setDescription(localStorage.getItem("description"));
    setItemLocation(localStorage.getItem("itemLocation"));
    setPhoto(localStorage.getItem("photo"));
  }, []);

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

  function updateData(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:8070/marketplace/updateRequest/${_id}`, {
        itemName,
        category,
        weight,
        description,
        itemLocation,
        photo,
      })
      .then(() => {
        alert("Request Updated Successfully");
        history.push("/dashboard");
      })
      .catch((err) => {
        alert(err);
      });
  }
  // const updateData = () => {
  //   axios
  //     .put(`http://localhost:8070/marketplace/updateRequest/${_id}`, {
  //       itemName,
  //       category,
  //       weight,
  //       description,
  //       itemLocation,
  //       photo,
  //     })
  //     .then(() => {
  //       alert("Request updated successfully");
  //       history.push("/dashboard");
  //     });
  // };

  return (
    <div className="container" onSubmit={updateData}>
      <form className="form">
        <div className="col-md-4 mb-3">
          <label htmlFor="name" className="form-label">
            Item name
          </label>
          <input
            type="text"
            className="form-control"
            id="Itemname"
            required
            value={itemName}
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
            required
            value={category}
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
            <span class="text-muted"> (Kg)</span>
          </label>
          <input
            type="number"
            className="form-control"
            id="weight"
            required

            min="1"
            step="1"

            value={weight}
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
            required
            value={description}
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
            className="form-control mb-3"
            type="file"
            required
            accept="image/png, image/jpeg"
            id="image"
            onChange={uploadImage}
          />
          <img
            className="img-thumbnail"
            width="150px"
            height="150px"
            src={photo}
            alt="Card image cap"
          />
        </div>
        <div className="col-md-3 mb-5">
          <label htmlFor="itemLocation" className="form-label">
            Item Location
          </label>
          <textarea
            className="form-control"
            placeholder="Add your address here"
            id="itemLocation"
            required
            value={itemLocation}
            defaultValue={""}
            onChange={(e) => {
              setItemLocation(e.target.value);
            }}
          />
        </div>

        {/* <a
          type="submit"
          className="btn btn-warning mb-5"
          href="/dashboard"
          onClick={updateData}
        >
          Update
        </a> */}
        <button
          type="submit"
          className="btn btn-warning mb-5"
          href="/dashboard"
        >
          Update
        </button>
      </form>
    </div>
  );
}
