import React from "react";

interface IState{}
interface IProps{}

const About:React.FC<IProps> = ()=>{
  return(
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
        <div className="col">
            <p className="h3 fw-bold text-success">About</p>
            <p className="fst-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur assumenda corrupti accusantium, veniam quisquam nisi, officiis unde, at molestiae error nesciunt nam voluptas voluptatum reprehenderit adipisci sunt maiores sapiente explicabo.
            Rerum est libero nostrum sapiente debitis nisi optio odit veritatis! Aspernatur quod debitis molestias corporis adipisci excepturi sit, laboriosam delectus dignissimos nihil laudantium provident facere alias cupiditate amet laborum totam!
            Cumque, ipsa. Tenetur, blanditiis. Repellendus tenetur quis, incidunt, autem illum numquam libero nesciunt provident quaerat, necessitatibus voluptatum? Aliquam magnam debitis, saepe voluptate, tempore, sunt quaerat consequatur distinctio sit a quis.</p>
          </div>
        </div>
        <div className="row">
            <div className="col">
              <ul className="list-group">
                <li className="list-group-item">
                  App Name: <span className="fw-bold">React Router with Typescript</span>
                </li>
                <li className="list-group-item">
                  Author: <span className="fw-bold">Laura Mejía Celis</span>
                </li>                
              </ul>
            </div>
          </div>
      </div>
    </React.Fragment>
  )
}

export default About;