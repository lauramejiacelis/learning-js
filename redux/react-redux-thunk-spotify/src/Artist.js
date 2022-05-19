import { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from './withRouter'
import { connect } from 'react-redux'
import { errorSelector, getArtistsSelector, isLoadingSelector } from './redux/selectors';
import { getArtistsThunk } from './redux/thunks';


class Artist extends Component {
    state = {
        albums: [],
    }

    componentDidMount(){
        const {id} = this.props.params;
        console.log(id);
        this.props.getArtistsThunk(id)
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
        isLoading: isLoadingSelector(state.artists),
        error: errorSelector(state.artists),
    }
} 

const mapDispatchToProps = {
    getArtistsThunk,
};



export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Artist));
