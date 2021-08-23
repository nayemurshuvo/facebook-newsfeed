import React, { Component } from "react";

class UserInfo extends Component {
  state = {};
  render() {
    return (
      <div className="post align-items-center d-flex">
        <div className="image-wrapper">
          <img src={this.props.img} alt="mypic" />
        </div>
        <div className="d-flex flex-column">
          <h2>{this.props.userName}</h2>
          <div>{this.props.postDuration}</div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
