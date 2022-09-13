import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home";
import Callback from "./pages/Callback";
import Playlists from "./pages/Playlists";
import { HomeMenu } from "pages/HomeMenu";
import { Profile } from "pages/Profile";
import { Search } from "pages/Search";

export default () => {
  return (
    <Box>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spotify" element={<Callback />} />
          <Route path="/homemenu" element={<HomeMenu/>}/>
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </Router>
    </Box>
    
  );
};
