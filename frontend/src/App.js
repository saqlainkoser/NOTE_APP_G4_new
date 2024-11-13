import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Nopage from './pages/Nopage';
import Signup from './components/Signup';
import Profile from './pages/Profile';
import Addnote from './pages/Addnote';
import Search from './pages/Search';


function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Nopage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/addnewnote' element={<Addnote/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
