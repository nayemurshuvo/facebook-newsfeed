import React, { Component } from "react";
import Post from "./post";
import "./post.css";

class Newsfeed extends Component {
  state = {};
  render() {
    return (
      <>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </>
    );
  }
}

export default Newsfeed;
