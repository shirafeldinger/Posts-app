import React, { Component } from "react";
import "./Post.css";

export default class Post extends Component {
  render() {
    const postId = "post-" + this.props.index;

    return (
      <div className="card" id={postId}>
        <h3>Title: {this.props.title}</h3>
        <h4 className="info">Info: {this.props.info}</h4>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => this.props.onRemovePost(this.props.index)}
        >
          Delete
        </button>
      </div>
    );
  }
}
