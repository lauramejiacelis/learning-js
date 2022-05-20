import { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from './withRouter'
import { connect } from 'react-redux'
import { errorSelector, getAlbumsSelector, getArtistsSelector, isLoadingSelector } from './redux/selectors';
import { getArtistsThunk } from './redux/thunks';


class Artist extends Component {
    state = {
        albums: [],
    }

    componentDidMount(){
        const {id, name} = this.props.params;
        console.log(`artist id clicked: ${id}`);
        console.log(`artist name clicked: ${name}`)
        //this.props.getArtistsThunk(id)
    }
    
    render() {
        return (
            <div>
                <Link to='/'>
                Home
                </Link>
                <h1>Artist Clicked</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        artists: getArtistsSelector(state.artists),
        //albums: getAlbumsSelector(state.albums),
        isLoading: isLoadingSelector(state.artists),
        error: errorSelector(state.artists),
    }
} 

const mapDispatchToProps = {
    getArtistsThunk,
};



export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Artist));
