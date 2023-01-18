import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

const Dashboard = (props) => {
  //  console.log(props)
  const { projects } = props;
  console.log(projects);

  // 18/01/2023 Quedó empezado porque falla la conexión con firebase
  // useFirestoreConnect(['projects']);
  // const projectss = useSelector((state) => state.firestore.data.projects);
  // console.log(projectss);
  // console.log('test');

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.projects.projects,
  };
};

export default connect(mapStateToProps)(Dashboard);
