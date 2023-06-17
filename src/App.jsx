import Login from './components/Auth/login';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/task/main';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path="/main" element={<Main />}/>
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
