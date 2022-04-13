import React, { Component } from "react";
import { withRouter } from "./withRouter";

const BLOGS = {
  1: {
    title: "Subio el precio de la papa",
    description: "lorem impsu cualquier cosa",
  },
  2: {
    title: "Laura  esta estudiando mucho",
    description:
      "Laura es una estudiante muy aplicada que estudia todos los días ...",
  },
};

class Blog extends Component {
  render() {
    const {
      params: { id },
    } = this.props;

    const blog = BLOGS[id];

    if (!blog) {
      return <h1> The blog you are searching doesn't exist</h1>;
    }

    return (
      <div>
        <h1>{blog.title}</h1>
        <p>{blog.description}</p>
      </div>
    );
  }
}

export default withRouter(Blog);
