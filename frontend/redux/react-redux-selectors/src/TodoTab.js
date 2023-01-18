import { PureComponent } from "react";
import { Tab, Badge } from "@chakra-ui/react";
import { connect } from "react-redux";
import { countTodosByStatus } from "./redux/todos";

class TodoTab extends PureComponent {
  render() {
    const { name, count } = this.props;
    return (
      <Tab>
        {name} <Badge>{count}</Badge>
      </Tab>
    );
  }
}

const mapStateToProps = (state, props) => ({
  count: countTodosByStatus(props.status)(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TodoTab);
