import React from "react";
import "../component.css";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-8  ">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="fw-normal">Welcome</h4>
              <h2 className="fw-normal">{this.props.name}</h2>
            </div>

            {/* <svg
              className="bd-placeholder-img card-img-top"
              width="75%"
              height={225}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>User Image</title>
              <rect width="100%" height="100%" fill="#55595c" />
            </svg> */}
            <img width="100%" height={225} src={this.props.link}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
