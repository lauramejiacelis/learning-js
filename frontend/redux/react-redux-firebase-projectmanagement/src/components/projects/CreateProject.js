import { useState } from 'react';
import { connect } from 'react-redux';
import { addProjectThunk } from '../../redux/projects/thunks';

const CreateProject = (props) => {
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addProjectThunk(data);
  };

  const handleChange = ({ target }) => {
    setData({ ...data, [target.id]: target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">New Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn teal accent-3 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  addProjectThunk,
};

export default connect(null, mapDispatchToProps)(CreateProject);
