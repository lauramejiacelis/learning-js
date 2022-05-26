import { PureComponent } from "react";
import { connect } from 'react-redux'
import { getLoading, getPokemonsSelector, getPokemonsSuccess } from "./redux/pokemons";


class Home extends PureComponent {
    componentDidMount(){
        const {getLoading} = this.props;
        getLoading();
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

const mapDispatchToProps = {
    getLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);