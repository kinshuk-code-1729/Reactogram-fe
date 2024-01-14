import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import PostOverview from './Pages/PostOverview';

function App() {
  return (
    <div className="app-bg">
      <Navbar />
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/posts" element={<PostOverview />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
