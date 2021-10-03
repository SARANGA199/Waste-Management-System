import React from "react";
import "../component.css";
class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //test
  render() {
    return (
      <div className="col-3">
        <div className="card  shadow-sm mb-4" style={{ width: "18rem" }}>
          <img
            scr={this.props.photo}
            style={{ width: "100%", height: "225px" }}
          />
          {console.log("photo link ", this.props.image)}

          {/* <svg
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
          </svg> */}
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <button type="button" className="btn btn-danger me-2">
                  <i className="bi bi-trash me-2" />
                  Delete
                </button>
                <button type="button" className="btn btn-warning ms-5">
                  <i className="bi bi-pencil-square me-2"></i>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
