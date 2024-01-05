import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
