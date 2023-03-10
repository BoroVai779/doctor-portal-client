import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deleteDoctor,refetch,setDeleteDoctor}) => {
    const {name,email} = deleteDoctor;

    const handleDelete = () => {
      fetch(`http://localhost:5000/doctors/${email}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            
            toast.success(`doctor ${name} is deleted`);
            setDeleteDoctor(null)
            refetch();
          }
        });
    };
    return (
        <div>
            

<input type="checkbox" id="confirmModal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Are You sure you want to delete {name}</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
        <button onClick={()=>handleDelete()} class="btn btn-xs btn-error">Delete</button>
      <label for="confirmModal" class="btn btn-xs">Cancel</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default DeleteConfirmModal;