import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Reviews from './Reviews';

const Testimonials = () => {
    const reviews = [
      {
        _id: 1,
        name: "Winson Harry",
        reviews:
          "This is very good service. I appreciate for this service and thank you for everything",
        img: people1,
        state: "New York",
      },
      {
        _id: 2,
        name: "Ms Harry",
        reviews:
          "This is very good service. I appreciate for this service and thank you for everything",
        img: people2,
        state: "Washington DC",
      },
      {
        _id: 3,
        name: "Harry potan",
        reviews:
          "This is very good service. I appreciate for this service and thank you for everything",
        img: people3,
        state: "California",
      },
    ];
    return (
        <div className='my-28'>
            <div className='flex justify-between'>
              <div>
                 <h4 className="text-xl text-accent font-bold">Testimonials</h4>
                 <h2 className='text-3xl'>What our patient says</h2>
              </div>
              <div>
                 <img src={quote} className='w-24 lg:w-48' alt="" />
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                reviews.map(review => <Reviews 
                key={review.id}
                review={review}
                ></Reviews>)
               }
            </div>
        </div>
    );
};

export default Testimonials;