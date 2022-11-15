import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './components/layout/Navbar';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SingIn from './components/auth/SignIn';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path='/signin' element={<SingIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
