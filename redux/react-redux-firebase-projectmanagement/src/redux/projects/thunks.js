import {
  addProject,
  editProject,
  deleteProject,
  loadingProjects,
  listProjects,
  getError,
} from './actionCreators';
import { colRef } from '../../config/fbConfig';
import { getDocs, addDoc } from 'firebase/firestore';

export const addProjectThunk =
  (project) =>
  (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    addDoc(colRef, {
      ...project,
      authorFirstName: 'Daenerys',
      authorLastName: 'Targaryen',
      authorId: 12345,
      createdAt: new Date(),
    })
      .then(() => {
        dispatch(addProject(project));
      })
      .catch((err) => {
        dispatch(getError(err));
      });
  };

// get collection data
getDocs(colRef)
  .then((snapshots) => {
    console.log(snapshots.docs);
    let projects = [];
    snapshots.docs.forEach((doc) => {
      projects.push({ ...doc.data(), id: doc.id });
    });
    console.log(projects);
  })
  .catch((err) => {
    console.log(err.message);
  });
