import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor,index,refetch,setDeleteDoctor}) => {
    const {name,speciality,img,email}= doctor;

    
    return (
      <tr>
        <th>{index+ 1}</th>
        <th>
          <div class="avatar">
            <div class="w-10 rounded">
              <img
                src={img}
                alt={name}
              />
            </div>
          </div>
        </th>
        <th>{name}</th>
        <th>{speciality}</th>
        <th>
          <label onClick={()=>setDeleteDoctor(doctor)} for="confirmModal" className="btn btn-xs btn-error">Delete</label>
          
        </th>
      </tr>
    );
};

export default DoctorRow;