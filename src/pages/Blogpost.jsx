import React from 'react';
import { Link } from 'react-router-dom';

const Blogpost = ({post}) => {
    
    const {userId,id,title,body} = post;
    return (
        <div>
            <div className="border-purple-300 border rounded-md p-5 space-y-4">
                <h1>Post Numbe {id}</h1>
                <p>{title.slice(0,25)}</p>
                <p>{body.slice(0,100)}</p>
                <Link to={`/post/${id}`}><button className='btn-secondary btn'>Click</button></Link>
              
            </div>
        </div>
    );
};

export default Blogpost;