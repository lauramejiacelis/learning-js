import { TodoList } from "./TodoList";
import { render, screen } from "@testing-library/react";

describe("TodoList", ()=>{
  it ("should render a list of three todos", ()=>{
    render(
      <TodoList todos={["go to the market", "dance", "do the homework"]} />
    )
    expect(screen.getAllByTestId("todo")).toHaveLength(3)
  })

  it ("should render an item of the entered list", ()=>{
    render(
      <TodoList todos={["eat lunch", "call the client"]}/>
    )
    expect(screen.getByText("call the client")).toBeInTheDocument();
  })
})