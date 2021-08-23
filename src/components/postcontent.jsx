import React, { Component } from "react";

class PostContent extends Component {
  state = {};
  render() {
    return (
      <div className="post-content">
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default PostContent;
