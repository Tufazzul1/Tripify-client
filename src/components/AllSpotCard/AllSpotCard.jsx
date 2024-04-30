import React from 'react';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";

const AllSpotCard = ({ spot }) => {
    const { _id, name, CName, location, photo, cost, seasonality, visitor, description , time} = spot;
    // console.log(spot)

    return (
        <div>
            <div className="card bg-base-100 shadow-xl border mt-6 ">
                <figure className="px-4 pt-6">
                    <img src={photo} alt="Shoes" className="rounded-xl h-[225px] w-[350px]" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"><IoLocationOutline /> {name}</h2>
                    <p> <span className='font-bold mt-3'>Cost : </span>{cost} $</p>
                    <p> <span className='font-bold'>Visitor per year : </span>{visitor} </p>
                    <p> <span className='font-bold'>Travel time : </span>{time} day</p>
                    <p> <span className='font-bold'>Seasonality : </span>{seasonality} </p>
                    <div className="card-actions">
                        <Link className='btn btn-primary w-full' to={`/spotDetails/${spot._id}`}>View Spot Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AllSpotCard;







