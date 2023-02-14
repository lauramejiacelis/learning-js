import React from "react";

interface IState{}
interface IProps{}

const Greetings:React.FC<IProps> = ()=>{
  return(
    <React.Fragment>
      <h3>Greetings</h3>
    </React.Fragment>
  )
}

export default Greetings;