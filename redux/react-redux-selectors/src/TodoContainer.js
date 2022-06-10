import { PureComponent } from "react";
import { TODO_STATUS, TODO_STATUS_LABEL } from "./constants";
import { Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import TodoTab from "./TodoTab";

class TodoContainer extends PureComponent {
  render() {
    return (
      <Tabs>
        <TabList>
          {TODO_STATUS_LABEL.map(({ label, value }) => (
            <TodoTab name={label} status={value} />
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
