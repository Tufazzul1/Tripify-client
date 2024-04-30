import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import TouristSpot from '../../Pages/TouristSpot';
import { IoLocationOutline } from 'react-icons/io5';
import { SlCalender } from "react-icons/sl";
import { LiaComments } from 'react-icons/lia';
import Countrys from '../Countrys';

const Home = () => {

    const spots = useLoaderData();
    const [populerData, setPopulerData] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [countrys, setCountrys] = useState([]);

    // console.log(spots)
    useEffect(() => {
        fetch('https://tripify-server-five.vercel.app/populer')
            .then(res => res.json())
            .then(data => {
                setPopulerData(data)
                // console.log(data)
            })
    }, []);
    useEffect(() => {
        fetch('https://tripify-server-five.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                // console.log(data)
            })
    }, []);
    useEffect(() => {
        fetch('https://tripify-server-five.vercel.app/countrys')
            .then(res => res.json())
            .then(data => {
                setCountrys(data)
                // console.log(data)
            })
    }, []);


    return (
        <div>
            <Banner></Banner>
            <div>

                <div className='text-center  mt-20 mb-10'>
                    <h2 className='font-bold text-4xl mb-3'>Tourist Spots</h2>
                    <p>The Acropolis, perched atop a rocky hill, features ancient ruins that tell a fascinating story of <br /> classical architecture and enduring legacy.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5'>
                    {
                        spots.map(spot =>
                            <TouristSpot
                                key={spot._id}
                                spot={spot}>
                            </TouristSpot>)
                    }
                </div>



                {/* populer section */}
                {populerData.length > 0 && (

                    <div className="mt-20">
                        <div className="text-center">
                            <h3 className="text-center font-bold text-4xl mb-3">Most Popular Spots</h3>
                            <p>Explore our most popular travel destinations, where travelers find stunning landscapes, vibrant cultures, and unforgettable experiences. <br /> Discover the places everyone is talking about and start planning your next adventure.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-5">
                            {populerData.map((spot) => (
                                <div
                                    key={spot._id}
                                    className="relative overflow-hidden rounded-xl"
                                >
                                    <img
                                        src={spot.photo}
                                        alt={spot.name}
                                        className="w-full p-2  object-cover transition-transform duration-300 hover:scale-105 rounded-xl h-[400px]"
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


                {/* countrys section */}
                {countrys.length > 0 && (

                    <div className="mt-20">
                        <div className="text-center">
                            <h3 className="text-center font-bold text-4xl mb-3">Countries</h3>
                            <p>Explore a collection of captivating destinations, each with its own unique charm and character. From bustling cities to tranquil landscapes, <br /> dive into the stories and attractions that make each place special</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-5">
                            {
                                countrys.map(country =>
                                    <Countrys
                                        key={country._id}
                                        country={country}
                                    ></Countrys>)
                            }
                        </div>

                    </div>
                )}

                {/* blog section */}
                {blogs.length > 0 && (

                    <div className="mt-20">
                        <div className="text-center">
                            <h3 className="text-center font-bold text-4xl mb-3">Blogs</h3>
                            <p>Explore our most popular travel destinations, where travelers find stunning landscapes, vibrant cultures, and unforgettable experiences. <br /> Discover the places everyone is talking about and start planning your next adventure.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-5">
                            {blogs.map((blog) => (
                                <div
                                    key={blog._id}
                                    className=""
                                >
                                    <div className="card  h-[400px] bg-base-100 shadow-xl">
                                        <figure><img src={blog.photo} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {blog.title}

                                            </h2>
                                            <div className="card-actions flex justify-between">
                                                <h3 className="flex gap-2"> <LiaComments /> {blog.comments}</h3>
                                                <h3 className='flex gap-2'> <SlCalender /> {blog.date}</h3>
                                            </div>
                                        </div>
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