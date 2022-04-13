import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";

class App extends Component {
  render() {
    return (
      <div>
        <h1>My cool header</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </div>
    );
  }
}

export default App;
