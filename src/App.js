import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
