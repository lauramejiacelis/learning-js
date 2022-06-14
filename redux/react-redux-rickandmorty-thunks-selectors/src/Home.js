import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getCharactersThunk } from './redux/characters';
import { TabList, Tabs, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import CharactersList from './CharactersList';
import { CHARACTERS_STATUS } from './constants';

class Home extends PureComponent {
  componentDidMount() {
    const { getCharactersThunk } = this.props;
    getCharactersThunk();
  }

  render() {
    return (
      <div>
        <Tabs mt={5} isFitted variant="enclosed">
          <TabList>
            {Object.keys(CHARACTERS_STATUS).map((status) => (
              <Tab>{status}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {Object.values(CHARACTERS_STATUS).map((status) => (
              <TabPanel>
                <CharactersList status={status} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  getCharactersThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
