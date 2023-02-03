import React from 'react';
import { useQuery } from 'react-query';
import Looding from '../Shared/Looding';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery("users", () =>
      fetch("http://localhost:5000/user",{
        method:'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then((res) => res.json())
    );
    
    if(isLoading){
        return <Looding></Looding>
    }
    return (
        
          
  <div class="overflow-x-auto">
    <table class="table w-full">
   
    <thead>
      <tr>
        <th>No.</th>
        <th>Users Email</th>
        <th>Role</th>
        <th>Remove Role</th>
      </tr>
    </thead>
    <tbody>
    
      {
        users.map((user,index) => <UserRow
        key={user._id}
        user ={user}
        index={index}
        refetch={refetch}
        ></UserRow>)
      }
  
      
    </tbody>
  </table>
</div>
    );
};

export default Users;