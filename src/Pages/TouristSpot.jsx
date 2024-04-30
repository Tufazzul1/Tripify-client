import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const TouristSpot = ({ spot }) => {
    const { _id, name, CName, location, photo, cost, seasonality, visitor, description, time } = spot;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl border">
                <figure><img className="h-[250px] w-full p-2" src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    <IoLocationOutline /> {name}
                        <div className="badge badge-secondary">{cost} $</div>
                    </h2>
                    <p className="mb-6">Location : {location}</p>
                    <div className="card-actions flex justify-between">
                        <div className="badge badge-outline p-4">{time} day</div>
                        <Link className="badge badge-primary p-4" to={`/spotDetails/${spot._id}`}>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristSpot;