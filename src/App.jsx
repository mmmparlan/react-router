//import { useState } from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Blue from './components/Blue.jsx';
import Red from './components/Red.jsx';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <div id="container">
      {/* <h1>Hello React Router!</h1> */}
      <div id="navbar">
        <Link to='/Blue.jsx'>Blue</Link>
        <Link to='/Red.jsx'>Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/Blue.jsx" element={<Blue />} />
          
          <Route path="/Red.jsx" element={<Red />} />
        </Routes>
      </div>
    </div>

    </>
  )
}

export default App
