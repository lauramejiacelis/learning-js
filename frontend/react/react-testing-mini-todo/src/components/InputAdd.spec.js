import { InputAdd } from "./InputAdd";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe("InputAdd", ()=>{
  it ("should render a Todo Input", ()=>{
    render(
      <InputAdd />
    )
    const inputAdd = screen.getByTestId("inputAdd")
    expect(inputAdd).toBeInTheDocument();
    
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

  //given should(assert) when(act)
  it("should call onAdd when the user types and then clicks the button", ()=>{
    const spy = jest.fn()//arrange
    render(<InputAdd onAdd={spy}/>)//act onAdd={(text)=>{expect(text).toBeEqual("mercar")}}
    const inputAdd = screen.getByTestId("inputAdd")//act
    const buttonAdd = screen.getByTestId("buttonAdd")//act
    
    userEvent.type(inputAdd, "mercar")//act
    userEvent.click(buttonAdd)//act

    expect(spy).toHaveBeenCalledWith("mercar") //assert



  })

})