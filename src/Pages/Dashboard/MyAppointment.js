import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointment, setAppointment] = useState([])
    const [user]= useAuthState(auth);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:5000/booking?patient=${user.email}`,{
          method:'GET',
          headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res =>{
          console.log('res',res)
          if(res.status === 401 || res.status === 403){
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate('/');
          }
         return res.json()
        })
        .then(data => {
          setAppointment(data)
        })
    },[user,navigate])
    return (
      <div>
        <h2>My appointment:{appointment.length}</h2>
        <h2>User:{user.email}</h2>

        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>date</th>
                <th>Time</th>
                <th>Treatment</th>
              </tr>
            </thead>
            <tbody>
              {appointment.map((a, index) => (
                <tr>
                  <th>{index +1}</th>
                  <td>{a.patientName}</td>
                  <td>{a.date}</td>
                  <td>{a.slot}</td>
                  <td>{a.treatment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyAppointment;