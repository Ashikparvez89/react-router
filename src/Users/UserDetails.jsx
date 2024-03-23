import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const useretails = useLoaderData();
  const {id,name,phone,username,website} = useretails;
  const navigate = useNavigate();
  const handleGoBack = ()=>{
    navigate(-1)
  }
  return (
    <div>
      <div className="container max-w-xl mx-auto p-4 text-xl font-bold border border-yellow-200 rounded-lg space-y-5 mt-5">
        <div className="p-5 space-y-4 text-center">
            <p>{id}</p>
            <p>{username}</p>
            <p>{name}</p>
            <p>{phone}</p>
            <p>{website}</p>
            <button onClick={handleGoBack} className="btn btn-primary mt-4">Go back</button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
