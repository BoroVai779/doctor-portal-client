import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';
import Demo from './Demo';

const Services = () => {
    const services = [
        {
            _id: 1,
            name:'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name:'Cavity Treatment',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name:'Whitening Treatment',
            description: '',
            img: whitening
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-accent font-bold text-2xl'>Our Services</h3>
                <h3 className='text-3xl'>Services We are Provided</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service ={service}
                    ></Service> )
                }
            </div>
            <div>
                <Demo></Demo>
            </div>
        </div>
    );
};

export default Services;