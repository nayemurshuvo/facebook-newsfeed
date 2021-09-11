import React, { Component } from "react";
import Actions from "./actions.jsx";
import PostContent from "./postcontent.jsx";
import UserInfo from "./userInfo.jsx";

class Post extends Component {
  render() {
    return (
      <div className="container mx-auto">
        <div className="post-wrapper">
          <UserInfo
            img={this.props.img}
            userName={this.props.userName}
            postDuration={this.props.postDuration}
          />
          <PostContent content={this.props.content} />
          <Actions
            onLike={this.props.onLike}
            isLiked={this.props.isLiked}
            onHandleIncrement={this.props.onHandleIncrement}
          />
        </div>
      </div>
    );
  }
}

export default Post;
