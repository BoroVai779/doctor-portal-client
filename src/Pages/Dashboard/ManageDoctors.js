import React from 'react';
import { useQuery } from 'react-query';
import Looding from '../Shared/Looding';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const { data: doctors, isLoading } = useQuery("doctor", () =>
      fetch("http://localhost:5000/doctors", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
    );
    if(isLoading){
        return <Looding></Looding>
    }
    return (
      
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>No.</th>
                <th>Avater</th>
                <th>Name</th>
                <th>Spciality</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
               doctors.map((doctor,index) =><DoctorRow
               key={doctor._id}
               doctor= {doctor}
               index ={index}
               ></DoctorRow>)
              }
            </tbody>
          </table>
        </div>
      
    );
};

export default ManageDoctors;