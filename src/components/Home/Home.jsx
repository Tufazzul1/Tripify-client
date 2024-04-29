import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import AllSpotCard from '../AllSpotCard/AllSpotCard';

const Home = () => {

    const spots = useLoaderData();
    // console.log(spots)
    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className='text-4xl font-bold text-center mt-16'>Tourist Spots</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        spots.map(spot =>
                            <AllSpotCard
                                key={spot._id}
                                spot={spot}>
                            </AllSpotCard>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;