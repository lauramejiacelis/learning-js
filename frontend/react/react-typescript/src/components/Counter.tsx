import React, { useState } from 'react'

interface IState{
  count: number;
}
interface IProps{}

const Counter:React.FC<IProps> = () => {
  const [state, setState]= useState<IState>({
    count: 0
  })

  let incr = ():void=>{
    setState({
      count: state.count + 1
    })
  }

  let decr = ():void=>{
    setState({
      count: state.count - 1
    })
  }

  return ( 
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <p className="h3 display-3">
                Count: {state.count}
              </p>
              <button className="btn btn-success m-1" onClick={incr}>Increment</button>
              <button className="btn btn-danger m-1" onClick={decr}>Decrement</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;