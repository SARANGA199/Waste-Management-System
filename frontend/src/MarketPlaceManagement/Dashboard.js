import React, { useState, useEffect, useContext } from "react";
import "../component.css";
import { AuthContext } from "../Context/AuthContext";

import UserCard from "./UserCard";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

export default function Dashboard() {
  const [RequestList, setRequestList] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get("http://localhost:8070/marketplace/")
      .then((res) => {
        setRequestList(res.data);
      })
      .catch((err) => {
        alert(err.message);
      }, []);
  });
  const setData = (data) => {
    let { _id, itemName, category, weight, description, itemLocation, photo } =
      data;
    localStorage.setItem("ID", _id);
    localStorage.setItem("itemName", itemName);
    localStorage.setItem("category", category);
    localStorage.setItem("weight", weight);
    localStorage.setItem("description", description);
    localStorage.setItem("itemLocation", itemLocation);
    localStorage.setItem("photo", photo);
    console.log(data);
  };
  return (
    <div>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <UserCard name={user.name} />
          </div>
        </div>
      </section>
      <div className="album py-4 bg-light">
        <div className="container">
          <div className="col text-center">
            <a class="btn btn-primary mb-4 text-center" href={"/addrequest"}>
              <i class="bi bi-plus-circle me-2 lg "></i>
              Add New
            </a>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {RequestList.map((RequestList, index) => (
              <div key={index}>
                <Card>
                  <CardImg
                    top
                    width="318px"
                    height="180"
                    src={RequestList.photo}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{RequestList.itemName}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Card subtitle
                    </CardSubtitle>
                    <CardText>{RequestList.description}</CardText>
                    <div>
                      <a
                        className="btn btn-danger me-5 ms-3"
                        href="/deleteRequest"
                      >
                        <i className="bi bi-trash me-2" />
                        Delete
                      </a>
                      <a
                        type="button"
                        className="btn btn-warning ms-5"
                        href="/UpdateRequest"
                        onClick={() => setData(RequestList)}
                      >
                        <i className="bi bi-pencil-square me-2"></i>
                        Update
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
