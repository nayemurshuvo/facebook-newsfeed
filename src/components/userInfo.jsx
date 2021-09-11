import React, { Component } from "react";

class UserInfo extends Component {
  render() {
    const { img, userName, postDuration } = this.props;
    return (
      <div className="post align-items-center d-flex">
        <div className="image-wrapper">
          <img src={img} alt="mypic" />
        </div>
        <div className="d-flex flex-column">
          <h2>{userName}</h2>
          <div>{postDuration}</div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
