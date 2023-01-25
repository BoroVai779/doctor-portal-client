import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Looding from '../Shared/Looding';
import BookingModal from './BookingModal';
import Services from './Services';

const AvailableAppointment = ({date, setDate}) => {
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date,'PP')
    const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], ()=>fetch(`http://localhost:5000/available?date=${formattedDate}`)
             .then((res) => res.json()))

             if(isLoading){
              return <Looding></Looding>
             }
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //       .then((res) => res.json())
    //       .then((data) => setServices(data));
    // },[formattedDate])
    return (
      <div>
        <h2 className="text-2xl text-center text-accent">
          Available Appointment On : {format(date, "PP")}.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Services
              key={service._id}
              service={service}
              setTreatment={setTreatment}
            ></Services>
          ))}
        </div>
        {treatment && (
          <BookingModal
            date={date}
            treatment={treatment}
            setTreatment={setTreatment}
            refetch={refetch}
          ></BookingModal>
        )}
      </div>
    );
};

export default AvailableAppointment;