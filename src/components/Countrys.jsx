import React from 'react';

const Countrys = ({ country }) => {
    // console.log(country)

    const { photo, name, CName, cost, description, seasonality, location } = country;
    return (
        <div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{CName}</h2>
                    <p>{description}</p>
                    
                </div>
            </div>
        </div>
    )
};

export default Countrys;