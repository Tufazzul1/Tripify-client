import React from 'react';
import { Link } from 'react-router-dom';

const Countrys = ({ country }) => {
    // console.log(country)

    const { photo, name, CName, cost, description, seasonality, location } = country;
    return (
        <div>

            <Link to={`/country/${CName}`}>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-[250px] w-full' src={photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{CName}</h2>
                        <p>{description}</p>

                    </div>
                </div>
            </Link>
        </div>
    )
};

export default Countrys;



