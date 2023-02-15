import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import './App.css';
import Guest from './components/Guest';
import Profile from './components/Profile';
import { BrowserRouter } from 'react-router-dom';
import NaviBar from './components/NaviBar';
import NaviBar2 from './components/NaviBar2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <NaviBar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/guest' element={<Guest />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
