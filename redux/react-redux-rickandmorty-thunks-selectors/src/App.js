import { PureComponent } from 'react';
import {
  Button,
  Heading,
  Image,
  Box,
  HStack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Character from './Character';
import Docs from './Docs';
import AboutUs from './AboutUs';

class App extends PureComponent {
  render() {
    return (
      <div>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    );
  }
}

export default App;

function TopNav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack spacing="24px" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Box>
        <Link to="/">
          <Image
            boxSize="70px"
            src="https://iselareyesperdomo94.github.io/MEX-Data-Lovers-008/src/img/rmicon.svg"
            alt="Logo"
            bg="gray.100"
            borderRadius="50"
          />
        </Link>
      </Box>
      <Box>
        <Link to="/docs">
          <Heading as="h3" size="lg">
            Docs
          </Heading>
        </Link>
      </Box>
      <Box>
        <Link to="/aboutus">
          <Heading as="h3" size="lg">
            About
          </Heading>
        </Link>
      </Box>

      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </HStack>
  );
}
