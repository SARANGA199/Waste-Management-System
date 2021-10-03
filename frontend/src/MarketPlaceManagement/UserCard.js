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

            <img width="100%" height={225} src={this.props.link}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
