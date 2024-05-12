import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from './users/AddUser';
import '/WebService/src/main/resources/templates/frontend/src/Style.css';


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />

      <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path='/addUser' element={<AddUser />}></Route>
      </Routes>

    </Router>
      
    </div>
  );
}

export default App;
