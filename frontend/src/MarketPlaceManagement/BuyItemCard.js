import React from "react";
import "../component.css";

class BuyItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-3">
        <div className="card  shadow-sm mb-4" style={{ width: "18rem" }}>
          <svg
            className="bd-placeholder-img card-img-top"
            width="100%"
            height={225}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
          </svg>
          <div className="card-body">
            <label htmlFor="name" className="form-label">
              Item name
            </label>
            <br />
            <label htmlFor="name" className="form-label">
              Rs.
            </label>
            <label htmlFor="name" className="form-label">
              300
            </label>
            <div className="d-flex justify-content-between align-items-center"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default BuyItemCard;
