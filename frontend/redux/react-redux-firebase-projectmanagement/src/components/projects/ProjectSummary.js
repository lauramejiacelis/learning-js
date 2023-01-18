const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by Laura Mejía</p>
        <p className="grey-text">12th November, 9pm</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
