import { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "./withRouter";

class Home extends Component {
  handleClick = () => {
    this.props.navigate("/about?from=home");
  };

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/about">Go to about</Link>
        <button onClick={this.handleClick}>programatically go to about</button>
      </div>
    );
  }
}

const HomeWithNavigate = withRouter(Home);

export default HomeWithNavigate;
