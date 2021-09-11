import React, { Component } from "react";
import Post from "./post";
import "./post.css";

class Newsfeed extends Component {
  state = {
    posts: [
      {
        id: 0,
        userName: "Nayemur",
        img: "image.jpeg",
        content: "This is my first react course",
        isLiked: false,
        postDuration: "1h",
        likes: 0,
      },
      {
        id: 1,
        userName: "Akash",
        img: "image.jpeg",
        content: "This is my fb project",
        isLiked: false,
        postDuration: "2h",
        likes: 10,
      },
      {
        id: 2,
        userName: "Shuvo",
        img: "image.jpeg",
        content: "It was a nice day",
        isLiked: false,
        postDuration: "4h",
        likes: 20,
      },
    ],
  };

  handleLikeButton = (id) => {
    const post = this.state.posts.map((post) => {
      if (post.id == id) {
        if (post.isLiked == false) {
          const newData = { ...post, isLiked: true, likes: post.likes + 1 };
          return newData;
        } else {
          const newData = { ...post, isLiked: false, likes: post.likes - 1 };
          return newData;
        }
      } else return post;
    });

    this.setState({ posts: post });
  };

  render() {
    return (
      <>
        {this.state.posts.map((post) => (
          <Post
            img={post.img}
            userName={post.userName}
            postDuration={post.postDuration}
            content={post.content}
            onLike={post.likes}
            isLiked={post.isLiked}
            onHandleIncrement={() => this.handleLikeButton(post.id)}
          />
        ))}
      </>
    );
  }
}

export default Newsfeed;
