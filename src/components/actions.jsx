import React, { Component } from "react";
import Like from "./like.jsx";
import Comment from "./comment.jsx";
import Share from "./share.jsx";

class Actions extends Component {
  state = {};
  render() {
    return (
      <div className="social d-flex justify-content-between">
        <Like
          onLike={this.props.onLike}
          isLiked={this.props.isLiked}
          onHandleIncrement={this.props.onHandleIncrement}
        />
        <Comment />
        <Share />
      </div>
    );
  }
}

export default Actions;
