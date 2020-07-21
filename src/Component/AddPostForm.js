import React, { Component } from "react";
import "./AddPost.css";

export default class AddPostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      info: "",
    };
  }

  render() {
    return (
      <div className="Addpost">
        <input
          className="form-control"
          onChange={(e) => this.setState({ title: e.target.value })}
          value={this.state.title}
          type="text"
          placeholder="Title"
        />
        <input
          className="form-control"
          type="text"
          placeholder="Info"
          onChange={(e) => this.setState({ info: e.target.value })}
          value={this.state.info}
        />
        <button
          className=" btn btn-primary m-2"
          onClick={() => {
            this.props.onAddPost(this.state.title, this.state.info);
            this.setState({ title: "", info: "" });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
