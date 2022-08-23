import { InputAdd } from "./InputAdd";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe("InputAdd", ()=>{
  it ("should render a Todo Input", ()=>{
    render(
      <InputAdd todos={["go to the market", "dance", "do the homework"]} />
    )
    const inputAdd = screen.getByTestId("inputAdd")
    expect(inputAdd).toBeInTheDocument();
    expect(inputAdd).toHaveAttribute("type", "text")
  })

  it("should pass a valid input", ()=>{
    render(
      <InputAdd/>
    )
    const inputAdd = screen.getByTestId("inputAdd")
    userEvent.type(inputAdd, "mercar")

    expect(inputAdd).toHaveValue("mercar")
    expect(screen.queryByTestId("error")).not.toBeInTheDocument()
  })
})