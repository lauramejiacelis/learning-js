import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import styles from './App.module.css';
import Login from './Login';
import Register from './Register';
import Settings from './Setting';
import Todos from './Todos';

function App() {
  return (
    <div className={styles.mainContainer}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App;
