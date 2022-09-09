import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Callback from "./pages/Callback";
import Playlists from "./pages/Playlists";

export default () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spotify" element={<Callback />} />
        <Route path="/playlists" element={<Playlists />} />
      </Routes>
    </Router>
  );
};
