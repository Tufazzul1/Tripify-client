
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const SpotDetails = () => {
    const { id } = useParams();
    // console.log(id);
    const [spot, setSpot] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/singleSpot/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setSpot(data)
            })
    }, [id])

    console.log(spot)



    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                <div>
                    <img src={spot.photo} alt="" />
                </div>
                <div className='boder shadow-lg p-6 space-y-2'>
                    <h3 className='font-bold text-4xl mb-8'> {spot.name}</h3>
                    <h4><span className='font-bold'>Country :</span> {spot.CName}</h4>
                    <h4><span className='font-bold'>Cost :</span> {spot.cost}$</h4>
                    <h4><span className='font-bold'>Visitor :</span> {spot.visitor}</h4>
                    <h4><span className='font-bold'>When have to go :</span> {spot.seasonality}</h4>
                    <h4><span className='font-bold'>Time :</span> {spot.time}</h4>
                    <h4>{spot.description}</h4>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

// name, CName, location,time,  photo, cost, seasonality, visitor, description, email, UserName

export default SpotDetails;