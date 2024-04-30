import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllSpotCard from '../components/AllSpotCard/AllSpotCard';
import Footer from '../components/Footer/Footer';

const AllSpot = () => {

    const spots = useLoaderData();
    // console.log(spot)

    const [sort, setSort] = useState('asc');

    const sortedSpots = [...spots].sort((a, b) => {
        if (sort === 'asc') {
            return parseFloat(a.cost) - parseFloat(b.cost); 
        } else {
            return parseFloat(b.cost) - parseFloat(a.cost); 
        }
    });
    return (
        <div>
            <div className='h-[250px] mt-3 flex items-center justify-center bg-[#2d0057CC]'>
                <h3 className="text-xl md:text-4xl font-bold text-white">All Tourist Spot</h3>

            </div>
            <div className='text-center'>
                <div className="dropdown mt-6">
                    <div tabIndex={0} role="button" className="btn m-1 btn-primary">Avarage Cost</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                         <li onClick={() => setSort('asc')}><a>Low Cost</a></li>
                        <li onClick={() => setSort('desc')}><a>High Cost</a></li>
                    </ul>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    sortedSpots.map(spot =>
                        <AllSpotCard
                            key={spot._id}
                            spot={spot}>
                        </AllSpotCard>)
                }
            </div>
            <Footer></Footer>
        </div>

    );
};

export default AllSpot;


