import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SpotDetails = () => {
    const { id } = useParams();
    // console.log(id);
    const [spot, setSpot] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/singleSpot/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSpot(data)
            })
    }, [id])



    return (
        <div>
            <h2>Spot details</h2>
        </div>
    );
};

export default SpotDetails;