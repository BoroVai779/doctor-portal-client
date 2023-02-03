import React from 'react';

const DoctorRow = ({doctor,index}) => {
    const {name,speciality}= doctor;
    return (
        
            <tr>
                <th>{index}</th>
                <th>Avatar</th>
                <th>{name}</th>
                <th>{speciality}</th>
                <th><button class="btn btn-xs btn-error">Delete</button></th>
            </tr>
        
    );
};

export default DoctorRow;