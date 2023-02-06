import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Looding from '../Shared/Looding';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
    const { data: doctors, isLoading,refetch } = useQuery("doctor", () =>
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
              {doctors.map((doctor, index) => (
                <DoctorRow
                  key={doctor._id}
                  doctor={doctor}
                  index={index}
                  refetch={refetch}
                  setDeleteDoctor={setDeleteDoctor}
                ></DoctorRow>
              ))}
            </tbody>
          </table>
        </div>
        {deleteDoctor && (
          <DeleteConfirmModal
            deleteDoctor={deleteDoctor}
            refetch={refetch}
            setDeleteDoctor={setDeleteDoctor}
          ></DeleteConfirmModal>
        )}
      </div>
    );
};

export default ManageDoctors;