
import { Route, Routes } from 'react-router';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
 import "react-toastify/dist/ReactToastify.css";
 import { ToastContainer} from "react-toastify";
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctors from './Pages/Dashboard/AddDoctors';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="About" element={<About></About>}></Route>
        <Route path="Login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
          
        >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='MyReview' element={<MyReview></MyReview>}></Route>
          <Route path='MyHistory' element={<MyHistory></MyHistory>}></Route>
          <Route path='Users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='AddDoctors' element={<RequireAdmin><AddDoctors></AddDoctors></RequireAdmin>}></Route>
          <Route path='ManageDoctors' element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
