import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const FullPost = () => {
    const fullpost = useLoaderData();
    const navigate = useNavigate();
    const handleGoBack=()=>{
        navigate(-1)
    }
    console.log(fullpost)
    return (
        <div className='container max-w-xl mx-auto p-4 text-xl font-bold border border-yellow-200 rounded-lg space-y-5 mt-5'>
            <div className="p-5 space-y-4 text-center">
            <p>{fullpost.id}</p>
            <h1>{fullpost.title} </h1>
            <p>{fullpost.body}</p>
           <button onClick={handleGoBack} className='btn btn-primary mt-4'>Go back</button>
            </div>
        </div>
    );
};

export default FullPost;