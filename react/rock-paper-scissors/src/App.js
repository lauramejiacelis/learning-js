import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Game from './pages/Game';
import Home from './pages/Home';

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Game />} />
        {/* <Route path="/game/:id/setplayers" element={<SetPlayers />} /> */}
      </Routes>
    </Box>
  );
};

export default App;
