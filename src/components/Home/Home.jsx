import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import TouristSpot from '../../Pages/TouristSpot';
import { IoLocationOutline } from 'react-icons/io5';

const Home = () => {

    const spots = useLoaderData();
    const [populerData, setPopulerData] = useState([])
    // console.log(spots)
    useEffect(() => {
        fetch('https://tripify-server-five.vercel.app/populer')
            .then(res => res.json())
            .then(data => {
                setPopulerData(data)
                console.log(data)
            })
    }, [])


    return (
        <div>
            <Banner></Banner>
            <div>

                <h2 className='text-center font-bold text-4xl mt-20 mb-10'>Tourist Spots</h2>

                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5'>
                    {
                        spots.map(spot =>
                            <TouristSpot
                                key={spot._id}
                                spot={spot}>
                            </TouristSpot>)
                    }
                </div>

                {populerData.length > 0 && (

                    <div className="mt-20">
                        <h3 className="text-center font-bold text-4xl">Most Popular Spots</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-5">
                            {populerData.map((spot) => (
                                <div
                                    key={spot._id}
                                    className="relative overflow-hidden"
                                >
                                    <img
                                        src={spot.photo}
                                        alt={spot.name}
                                        className="w-full  object-cover transition-transform duration-300 hover:scale-105 rounded-lg h-[400px]"
                                    />
                                    <div
                                        className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex flex-col justify-center  transition-opacity duration-300 opacity-0 hover:opacity-100 p-6"
                                    >
                                        <h1 className="text-white text-3xl font-bold"><IoLocationOutline />{spot.name}</h1>
                                        <p className="text-white">{spot.description}</p>
                                        <p className="text-white">{spot.cost}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                )}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;