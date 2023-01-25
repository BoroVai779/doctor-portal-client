import React from "react";
import { format } from "date-fns";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const BookingModal = ({ setTreatment, treatment, date,refetch}) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);
  const formattedDate = format(date,'PP')

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);
    const booking = {
      treatmentId:_id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value
    }
    fetch("http://localhost:5000/booking",{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res =>res.json())
    .then(data =>{
      if(data.success){
        toast(`appointment is set,${formattedDate} at ${slot}`);
      }
      else{
        toast.error(`already have an appointment,${data.booking?.date} at ${data.booking?.slot}`);
      }
      refetch();
      setTreatment(null);
    })
    
    
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-accent">Booking for: {name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot,index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName || ""}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              value={user?.email || ""}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
