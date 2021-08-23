import React, { Component } from "react";
import Actions from "./actions.jsx";
import PostContent from "./postcontent.jsx";
import UserInfo from "./userInfo.jsx";

class Post extends Component {
  state = {
    likes: 0,
    isLiked: false,
    imgSrc: "image.jpeg",
    userName: "Nayemur Rahman",
    postDuration: "1h",
    content: "This is my first React Course",
  };

  handleIncrement = () => {
    this.setState({ likes: this.state.likes + 1 });
    this.state.isLiked = true;
  };

  render() {
    return (
      <div className="container mx-auto">
        <div className="post-wrapper">
          <UserInfo
            img={this.state.imgSrc}
            userName={this.state.userName}
            postDuration={this.state.postDuration}
          />
          <PostContent content={this.state.content} />
          <Actions
            onLike={this.state.likes}
            isLiked={this.state.isLiked}
            onHandleIncrement={this.handleIncrement}
          />
        </div>
      </div>
    );
  }
}

export default Post;
