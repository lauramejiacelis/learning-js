import { PROJECTS_ACTION_TYPES } from './actionTypes';

export const addProject = (description) => ({
  type: PROJECTS_ACTION_TYPES.ADD_PROJECT,
  payload: description,
});

export const editProject = (data) => ({
  type: PROJECTS_ACTION_TYPES.EDIT_PROJECT,
  payload: data,
});

export const deleteProject = (description) => ({
  type: PROJECTS_ACTION_TYPES.DELETE_PROJECT,
  payload: description,
});

export const loadingProjects = () => ({
  type: PROJECTS_ACTION_TYPES.LOADING_PROJECTS,
});

export const listProjects = (projects) => ({
  type: PROJECTS_ACTION_TYPES.LIST_PROJECTS,
  payload: projects,
});

export const geterror = (err) => ({
  type: PROJECTS_ACTION_TYPES.GET_ERROR,
  payload: err,
});
