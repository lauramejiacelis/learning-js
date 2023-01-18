import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, consequuntur. Molestiae, assumenda. Necessitatibus,
            quia amet molestiae numquam sed voluptate consectetur velit ipsum
            veniam saepe deleniti corrupti modi obcaecati ratione atque.
          </p>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Laura Mejía Celis</div>
            <div>November 13th, 8pm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
