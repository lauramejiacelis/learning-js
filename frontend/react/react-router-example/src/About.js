import { Component } from "react";
import { withRouter } from "./withRouter";

class About extends Component {
  render() {
    const {
      location: { search },
    } = this.props;

    console.log(search)

    const queryString = new URLSearchParams(search);
    const from = queryString.get("from");

    return (
      <div>
        <h1>About</h1>
        {from && <span>You came from {from}</span>}
      </div>
    );
  }
}

export default withRouter(About);
