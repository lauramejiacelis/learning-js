import { PureComponent } from "react";
import { connect } from 'react-redux';
import { getCharactersSelector, loadingSelector, errorSelector, getCharactersThunk} from './redux/characters'
import {TabList, Tabs, Tab} from '@chakra-ui/react'
import CharactersList from './CharactersList'
import {CHARACTERS_STATUS} from './constants'

class Home extends PureComponent{
    componentDidMount() {
        const { getCharactersThunk } = this.props;
        getCharactersThunk();
    }

    render(){
        return(
            <div>
                <Tabs>
                    <TabList>
                        {Object.values(CHARACTERS_STATUS).map((status)=>(
                            <Tab>{status}</Tab>
                        ))}
                    </TabList>
                </Tabs>
                <CharactersList/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    characters: getCharactersSelector(state),
    loading: loadingSelector(state),
    error: errorSelector(state)
})

const mapDispatchToProps = {
    getCharactersThunk,
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

