import { Routes, Route } from 'react-router-dom';

import styles from './App.module.css';
import NavBar from './components/NavBar';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Setting';
import Todos from './pages/Todos';
import TodoDetail from './components/TodoDetail';

function App() {
  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/todos/:id" element={<TodoDetail />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
