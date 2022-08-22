import { TodoInput } from "./TodoInput";
import { render, screen } from "@testing-library/react";

describe("TodoInput", ()=>{
  it ("should render a Todo Input", ()=>{
    render(
      <TodoInput todos={["go to the market", "dance", "do the homework"]} />
    )
    const todoInput = screen.getByTestId("todoInput")
    expect(todoInput).toBeInTheDocument();
    expect(todoInput).toHaveAttribute("type", "text")
  })
})