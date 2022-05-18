import {Component} from 'react';
import { connect } from 'react-redux'
import styles from './App.module.css';
import { errorSelector, getArtistSelector, isLoadingSelector } from './redux/selectors';
import { getArtistThunk } from './redux/thunks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, Input, InputGroupText } from 'reactstrap';

class App extends Component {
  state={
    input: "",
  }

  handleChange = ({target:{value}})=>{
    this.setState({
      input: value,
    })
    console.log(this.state.input)
    const { artist } = this.props;
    console.log(artist)
  }

  handleSearch = ()=>{
    console.log(`handleSearch pre ${this.state.input}`);
    this.props.getArtistThunk(this.state.input);
  }

  render (){
    const { input } = this.state;
    const { artist } = this.props;
    return(
      <div>
        <div className={styles.logoContainer}>
          <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt='spotify logo' className={styles.logo}/>
        </div>
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

        <div className={styles.artistContainer}>
          
        </div>
        {
          artist.map((artistInfo)=>{
            console.log(artistInfo)
            return(
              <div className={styles.imageContainer}>
                <img src={artistInfo.image} alt=""/>
              </div>
            )
          })
        }
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  artist: getArtistSelector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
})

const mapDispatchToProps = {
  getArtistThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
