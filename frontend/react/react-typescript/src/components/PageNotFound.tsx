import React from "react";

interface IState{}
interface IProps{}

const PageNotFound:React.FC<IProps> = ()=>{
  return (
    <React.Fragment>
      <h3>Page Not Found</h3>
    </React.Fragment>
  )
}

export default PageNotFound;