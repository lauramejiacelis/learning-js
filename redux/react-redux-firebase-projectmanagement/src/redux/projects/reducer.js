import { PROJECTS_ACTION_TYPES } from './actionTypes';

const initialState = {
  projects: [
    { id: 1, title: 'Application Development', content: 'blah blah blah' },
    { id: 2, title: 'Process Automation', content: 'blah blah blah' },
    { id: 3, title: 'Analytical Project', content: 'blah blah blah' },
  ],
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_ACTION_TYPES.ADD_PROJECT:
      console.log('created project', action.payload);
      return state;
    case PROJECTS_ACTION_TYPES.GET_ERROR:
      console.log('created project error', action.payload);
      return state;
    default:
      return state;
  }
};

export default projectsReducer;
