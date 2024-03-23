import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';

const Users = () => {
    const users = useLoaderData()
    return (
        <div className="container mx-auto">
        <h1 className='text-2xl text-center font-bold my-5'>Total post {users.length}</h1>
        <p className="mx-auto max-w-lg text-lg font-semibold text-center mb-5">We have a maximum number post here Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, expedita.</p>
        <div className="grid grid-cols-3 gap-5">
            {
                users.map(user=><User user={user}></User>)
            }
        </div>
      </div>
    );
};

export default Users;