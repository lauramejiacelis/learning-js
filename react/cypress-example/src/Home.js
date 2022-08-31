import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Welcome to my App</h1>
      <Link to="/about" data-testid="about-link">
        About
      </Link>
    </div>
  );
};
