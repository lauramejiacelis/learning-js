import { PureComponent } from "react";
import { connect } from 'react-redux';

class Home extends PureComponent{
    render(){
        return(
            <div>I'm Home</div>
        )
    }
}

const mapStateToProps = (state) =>({})

const mapDispatchToProps = {}


export default Home;