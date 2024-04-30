import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";


const Country = () => {

    const { CName } = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/country/${CName}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCountry(data)
            })
    }, [])

    // console.log(country)
    return (
        <div>
            {
                country.map(con => <div key={con._id} className="flex ">
                    <div className="p-4 flex-1">
                        <img src={con.photo} alt="" />
                    </div>
                    <div className='boder shadow-lg p-6 space-y-2 flex-1'>
                        <h3 className='font-bold text-4xl mb-8 flex'><IoLocationOutline /> {con.name}</h3>
                        <h4><span className='font-bold'>Country :</span> {con.CName}</h4>
                        <h4><span className='font-bold'>Cost :</span> {con.cost}$</h4>
                        <h4><span className='font-bold'>When have to go :</span> {con.seasonality}</h4>
                        <h4>{con.description}</h4>

                    </div>
                </div>)
            }
        </div>
    );
};

export default Country;





