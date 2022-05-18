import {Component} from 'react';
import { connect } from 'react-redux'
import styles from './Home.module.css';
import { errorSelector, getArtistsSelector, isLoadingSelector } from './redux/selectors';
import { getArtistsThunk } from './redux/thunks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, Input, InputGroupText } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
    state={
        input: "",
    }
    
    handleChange = ({target:{value}})=>{
        this.setState({
            input: value,
        })
        const { artists } = this.props;
        console.log(artists)
    }
    
    handleSearch = ()=>{
        this.props.getArtistsThunk(this.state.input);
        this.setState({
            input: ""
        })
    }
    
    render (){
        const { input } = this.state;
        const { artists, isLoading, error } = this.props;

        if (isLoading) return (<h1>Loading...</h1>);

        if (error) return "Oops, an error ocurred"

        return(
            <div>
                <div className={styles.mainContainer}>
                    <div className={styles.inputContainer}>
                        <InputGroup>
                            <InputGroupText>Artist</InputGroupText>
                            <Input
                            type="text"
                            id="getArtist"
                            value={input}
                            onChange={this.handleChange}
                            />
                            <Button onClick={this.handleSearch}>Search</Button>
                        </InputGroup>
                </div>
    
                <div className={styles.artistsContainer}>
                {
                    artists.map((artistInfo)=>{
                    console.log(artistInfo)
                    return(
                        <Link 
                        to={`/Artist/${artistInfo.id}`}
                        className={styles.artistInfo}>
                        <img className={styles.artistImage} src={artistInfo.image} alt=""/>
                        {artistInfo.name}
                        </Link>
                    )
                    })
                }
                </div>
            
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);