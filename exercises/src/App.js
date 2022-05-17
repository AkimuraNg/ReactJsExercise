import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Ex1 from './components/Ex1/Ex1';
import Ex2 from './components/Ex2';
import Ex3 from './components/Ex3';
import Ex4 from './components/Ex4';
import Ex5 from './components/Ex5';
import Ex6 from './components/Ex6';
import Ex7 from './components/Ex7';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <Link to="/" style={{marginRight: 20}}>Home</Link>
            <Link to="/ex1" style={{marginRight: 20}}>Exercise 1</Link>
            <Link to="/ex2" style={{marginRight: 20}}>Exercise 2</Link>
            <Link to="/ex3" style={{marginRight: 20}}>Exercise 3</Link>
            <Link to="/ex4" style={{marginRight: 20}}>Exercise 4</Link>
            <Link to="/ex5" style={{marginRight: 20}}>Exercise 5</Link>
            <Link to="/ex6" style={{marginRight: 20}}>Exercise 6</Link>
            <Link to="/ex7" style={{marginRight: 20}}>Exercise 7</Link>
          </ul>
        </nav>
        <Routes>
          <Route path="/"></Route>
          <Route path="/ex1" element={<Ex1/>}></Route>
          <Route path="/ex2" element={<Ex2/>}></Route>
          <Route path="/ex3" element={<Ex3/>}></Route>
          <Route path="/ex4" element={<Ex4/>}></Route>
          <Route path="/ex5" element={<Ex5/>}></Route>
          <Route path="/ex6" element={<Ex6/>}></Route>
          <Route path="/ex7" element={<Ex7/>}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
