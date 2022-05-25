import { PureComponent } from "react";
import { connect } from 'react-redux'
import { getLoading, getPokemonsSelector, getPokemonsSuccess } from "./redux/pokemons";


class Home extends PureComponent {
    componentDidMount(){
        const {dispatch, pokemons} = this.props;
        console.log(pokemons)
        //console.log(dispatch(getLoading()))
        dispatch(getPokemonsSuccess(pokemons))
    }

    render (){
        const {pokemons} = this.props;
        return(
            <div>
                <h2>Pokemons List</h2>
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    pokemons: getPokemonsSelector(state),
})

export default connect(mapStateToProps)(Home);