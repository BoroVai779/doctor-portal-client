import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from './PrimaryButton';

const MakeAppointment = () => {
    return (
        <div style={{ background : `url(${appointment})`}} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-2xl text-primary'>Appointment</h3>
                <h3 className='text-4xl text-white'>Make An Appointment Today</h3>
                <p className='text-white py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, provident atque quidem quos repudiandae nobis, eius sit molestias illo rerum accusamus. Sed nulla aperiam unde illum magni vel, delectus repudiandae dicta quo natus repellendus voluptates inventore vero omnis incidunt nesciunt?</p>
                <PrimaryButton>Get Starts</PrimaryButton>
            </div>
        </div>
    );
};

export default MakeAppointment;