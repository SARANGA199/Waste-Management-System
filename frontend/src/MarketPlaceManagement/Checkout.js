import "../component.css";
import React, { useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";
import { useHistory } from "react-router";

export default function Checkout() {
  const [receivedItemId, setReceivedItemId] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orderStatus, setOrderStatus] = useState("");

  let history = useHistory();

  function sendData(e) {
    e.preventDefault();

    const newOrder = {
      deliveryAddress,
      quantity,
      orderStatus,
    };

    axios
      .post("http://localhost:8070/order/checkout", newOrder)
      .then(() => {
        alert("Successfully placed the order");
        history.push("/itemlist");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className=" container" style={{ width: "700px" }}>
      <h4 className="mb-3">Billing address</h4>
      <form className="form" onSubmit={sendData}>
        <div className="col-sm-8 mb-4">
          <label htmlFor="firstName" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
            placeholder="Your address here"
            id="address"
            defaultValue={""}
            required
            onChange={(e) => {
              setDeliveryAddress(e.target.value);
            }}
          />
          <div class="invalid-feedback">Please provide a valid zip.</div>
        </div>

        <div className="col-2 mb-4">
          <label htmlFor="email" className="form-label">
            Weight
            <span class="text-muted"> (Kg)</span>
          </label>
          <input
            type="number"
            min="1"
            className="form-control"
            id="weight"
            required
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <div className="col-8 mb-4">
          <label htmlFor="address" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            placeholder="Add your Special notes"
            id="description"
            defaultValue={""}
            required
            onChange={(e) => {
              setOrderStatus(e.target.value);
            }}
          />
        </div>

        <hr className="my-4 col-md-8" />
        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="same-address"
            required
          />
          <label className="form-check-label" htmlFor="same-address ">
            Shipping address is the same as my billing address
          </label>
        </div>
        <div className="form-check ">
          <input type="checkbox" className="form-check-input" id="save-info" />
          <label className="form-check-label" htmlFor="save-info">
            Save this information for next time
          </label>
        </div>
        <hr className="my-4 col-md-8 mb-5" />
        <div className="mb-5">
          <Button className="col-md-8 btn btn-primary btn-lg" type="submit">
            Continue to checkout
          </Button>
        </div>
      </form>
    </div>
  );
}
