import { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from './withRouter'
import { connect } from 'react-redux'
import { errorSelector, getAlbumsSelector, isLoadingSelector } from './redux/selectors';
import { getAlbumsThunk } from './redux/thunks';
import styles from './Artist.module.css'


class Artist extends Component {

    componentDidMount(){
        const {id} = this.props.params;
        console.log(`artist id clicked: ${id}`);
        //console.log(`Albums Thunk ${this.props.getAlbumsThunk(id)}`)
        this.props.getAlbumsThunk(id)
    }
    
    render() {
        const {albums, isLoading, error} = this.props;

        if (isLoading) return (<h1>Albums Loading...</h1>)

        if (error) return (<h1>Error in albums</h1>)

        return (
            <div>
                <Link className={styles.home} to='/'>
                    <img className={styles.homeIcon} alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfSslSFFlUWLkA5LG_Aw5ryuGswoP3a2dZgA&usqp=CAU"/>
                    <span className={styles.homeTittle}>Home</span>
                </Link>
                <h1>Albums</h1>
                <div className={styles.albumsContainer}>
                    {albums.map((albumInfo)=>{
                        return (
                            <div className={styles.albumInfo}>
                                <img alt='albumImage' src={albumInfo.image}/>
                                <h4>{albumInfo.name}</h4>
                                <h6>Release Date: {albumInfo.release_date}</h6>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        albums: getAlbumsSelector(state.albums),
        isLoading: isLoadingSelector(state.albums),
        error: errorSelector(state.albums),
    }
} 

const mapDispatchToProps = {
    getAlbumsThunk,
};

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Artist));
