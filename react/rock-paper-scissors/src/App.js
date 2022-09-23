import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import GameRPS from './pages/GameRPS';
import GameRPSLS from './pages/GameRPSLS';
import Home from './pages/Home';

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamerps" element={<GameRPS />} />
        <Route path="/gamerpsls" element={<GameRPSLS />} />
      </Routes>
    </Box>
  );
};

export default App;
