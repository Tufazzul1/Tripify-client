import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllSpotCard from '../components/AllSpotCard/AllSpotCard';
import Footer from '../components/Footer/Footer';

const AllSpot = () => {

    const spots = useLoaderData()
    // console.log(spot)
    return (
        <div>
            <div className='h-[250px] mt-3 flex items-center justify-center bg-[#2d0057CC]'>
                <h3 className="text-4xl font-bold text-white">All Tourist Spot</h3>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    spots.map(spot =>
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


