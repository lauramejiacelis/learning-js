import { PureComponent } from 'react';
import { Button, Heading, Image, Box, HStack } from '@chakra-ui/react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Character from './Character';
import Docs from './Docs';
import AboutUs from './AboutUs';
import { withTheme } from './ThemeProvider';

class App extends PureComponent {
  render() {
    return (
      <div>
        <TopNavWithTheme />
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

function TopNav(props) {
  console.log(props);
  return (
    <HStack
      spacing="24px"
      style={{ color: props.color, backgroundColor: props.bgColor }}
    >
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
      <ButtonWithTheme />
    </HStack>
  );
}

const TopNavWithTheme = withTheme(TopNav);

function ButtonTheme(props) {
  console.log(props);
  return (
    <Button>
      <Image
        src="https://media.istockphoto.com/vectors/sun-and-moon-glyph-silhouette-icon-black-day-and-night-symbol-flat-vector-id1197264504?k=20&m=1197264504&s=612x612&w=0&h=EqHNb5MrNF-iDrQdp81KfiwdNdNwiXdCenp4-t-0EtA="
        alt="switch theme"
        boxSize="35px"
      />
    </Button>
  );
}

const ButtonWithTheme = withTheme(ButtonTheme);
