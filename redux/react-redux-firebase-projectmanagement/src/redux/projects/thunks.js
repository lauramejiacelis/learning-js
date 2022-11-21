import { addProject, editProject, deleteProject, loadingProjects, listProjects, geterror } from "./actionCreators";

export const addProjectThunk = (project) => (dispatch) => {
    // make async call to database
    dispatch(addProject(project))
}