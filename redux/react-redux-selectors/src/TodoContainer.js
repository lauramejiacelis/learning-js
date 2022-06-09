import { PureComponent } from "react";
import { TODO_STATUS } from "./constants";
import { capitalize } from "./helpers";
import { Tabs, TabList, TabPanels, TabPanel, Tab } from "@chakra-ui/react";
import { connect } from "react-redux";
import TodoList from "./TodoList";

const TODOS_TABS = Object.values(TODO_STATUS).map((value) => capitalize(value));

class TodoContainer extends PureComponent {
  render() {
    return (
      <Tabs>
        <TabList>
          {TODOS_TABS.map((tab) => (
            <Tab>{tab}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {Object.values(TODO_STATUS).map((status) => (
            <TabPanel>
              <TodoList status={status} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
