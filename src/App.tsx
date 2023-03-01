import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import './App.css';
import Guest from './components/Guest';
import Profile from './components/Profile';
import { BrowserRouter } from 'react-router-dom';
import OldNaviBar from './components/OldNaviBar';
import NaviBar from './components/NaviBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <NaviBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/guest' element={<Guest />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
