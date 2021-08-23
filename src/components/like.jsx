import React, { Component } from "react";

class Like extends Component {
  state = {};

  render() {
    return (
      <div>
        <span class="badge bg-primary mx-1">{this.props.onLike}</span>
        <button
          onClick={this.props.onHandleIncrement}
          type="button"
          class="btn btn-primary"
        >
          {this.props.isLiked ? "Liked" : "Like"}
        </button>
      </div>
    );
  }
}

export default Like;
