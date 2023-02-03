import React from 'react';
import { useQuery } from 'react-query';
import Looding from '../Shared/Looding';

const ManageDoctors = () => {
    const { data: doctor, isLoading } = useQuery("doctor", () =>
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
        <div>
            <h2 className='text-3xl'>Doctors are here: {doctor.length}</h2>
        </div>
    );
};

export default ManageDoctors;