
import { Route, Routes } from 'react-router';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='About' element={<About></About>}></Route>
       <Route path='Login' element={<Login></Login>}></Route>
       <Route path='appointment' element={<Appointment></Appointment>}></Route>
       
     </Routes>
    </div>
  );
}

export default App;
