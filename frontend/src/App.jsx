import { Routes, Route, BrowserRouter, } from 'react-router-dom';

import './App.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      

    {/* Routing */}
  
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
     
    </Routes>
  
</BrowserRouter>
  );
}

export default App;
