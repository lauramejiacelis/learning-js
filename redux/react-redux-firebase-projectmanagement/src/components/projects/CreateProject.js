import { useState } from 'react';

const CreateProject = () => {
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
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

export default CreateProject;
