import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id,name,phone,username,website} = user;
  

    return (
        <div>
            <div className="text-center p-4 border border-blue-400 rounded-lg space-y-3">
            <p>{name}</p>
            <p>{phone}</p>
            <p>{username}</p>
            <p>{website}</p>
            <Link to={`/user/${id}`}><button className='btn btn-success mt-3'>See More</button></Link>
            </div>
        </div>
    );
};

export default User;