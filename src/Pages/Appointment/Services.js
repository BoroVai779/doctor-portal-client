import React from 'react';

const Services = ({service, setTreatment}) => {
    const {name, slots} = service;
    return (
      
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-accent">{name}</h2>
            <p>{
              slots.length  ? <span>{slots[0]}</span> : <span className='text-red-500 font-bold'>No Slots Available</span>
              }</p>
            <p>{slots.length} {slots.length>1 ? "spaces" : "space"} available</p>
            <div class="card-actions justify-center">
              <label 
                onClick={()=>setTreatment(service)} 
                disabled={slots.length===0}
              for="my-modal-6" 
              class="btn btn-accent text-white">Book Appointment</label>
            </div>
          </div>
        </div>
    );
};

export default Services;