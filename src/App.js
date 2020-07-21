import React, { Component } from "react";
import "./App.css";
import Post from "./Component/Post.js";
import AddPostsForm from "./Component/AddPostForm";
import "bootstrap/dist/css/bootstrap.min.css";

const message = "post was added!";

class App extends Component {
  state = {
    posts: [
      { title: "Learning to code react", info: "it's my first time" },
      {
        title: "I am coding in my room",
        info: "my dog is sleeping next to me",
      },
      {
        title: "Corona virus is still in israel",
        info: " the second wave is coming",
      },
    ],
    addInfo: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevPostsCount = prevState.posts.length;
    const currentPostsCount = this.state.posts.length;

    if (prevPostsCount < currentPostsCount) {
      const addedPostIndex = currentPostsCount - 1;
      const addedPost = document.querySelector("#post-" + addedPostIndex);
      setTimeout(() => addedPost.scrollIntoView(), 900);
    }
  }

  handleAddPost = (info, title) => {
    let copyArrPosts = [...this.state.posts];

    if (title === "" || info === "") {
      return;
    }

    copyArrPosts.push({ title, info });

    this.setState({ posts: copyArrPosts, addInfo: message });
    setTimeout(() => this.setState({ addInfo: "" }), 2500);
  };

  handleRemovePost = (i) => {
    let tempPosts = this.state.posts.filter((element, index) => index !== i);

    this.setState({ posts: tempPosts });
  };

  render() {
    return (
      <div className="App">
        <h1 id="headline">Posts</h1>
        <AddPostsForm onAddPost={this.handleAddPost} />
        <h3>
          <span className="badge badge-pill badge-success">
            {this.state.addInfo}
          </span>
        </h3>

        {this.state.posts.map((post, i) => {
          return (
            <Post
              key={i}
              index={i}
              title={post.title}
              info={post.info}
              onRemovePost={this.handleRemovePost}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
