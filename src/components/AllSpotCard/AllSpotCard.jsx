import React from 'react';

const AllSpotCard = ({ spot }) => {
    const { name, CName, location, photo, cost, seasonality, visitor, description } = spot;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl border mt-6">
                <figure className="px-4 pt-6">
                    <img src={photo} alt="Shoes" className="rounded-xl h-[225px] w-[350px]" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>{cost}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary w-full">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllSpotCard;







