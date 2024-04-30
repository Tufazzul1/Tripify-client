import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import Footer from '../components/Footer/Footer';

const Update = () => {
    const { user } = useAuth()

    const { id } = useParams();
    // console.log(id);
    const [spot, setSpot] = useState({});

    useEffect(() => {
        fetch(`https://tripify-server-five.vercel.app/singleSpot/${id}`)
            .then(res => res.json())
            .then(data => {
                setSpot(data)
                console.log(data)
            })
    }, [id]);

    const handleUpdate = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const CName = e.target.CName.value;
        const location = form.location.value;
        const photo = form.photo.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const visitor = form.visitor.value;
        const time = form.time.value;
        const description = form.description.value;
        const UserName = user.displayName;
        const email = user.email

        const spot = { name, time, CName, location, photo, cost, seasonality, visitor, description, email, UserName }
        console.log(spot)

        fetch(`https://tripify-server-five.vercel.app/update/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(spot)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if (data?.modifiedCount) {
                Swal.fire({
                    title: 'Success',
                    text: 'Spot Updated successfuly',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }
    return (
        <div>
            <div className='h-[250px] mt-3 flex items-center justify-center bg-[#2d0057CC]'>
                <h3 className="text-2xl md:text-4xl font-bold text-white"> Update Your Spot</h3>

            </div>
            <div>
                <form onSubmit={handleUpdate} className='mt-4 space-y-3 p-4'>
                    {/* name and photo */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <label className="form-control w-full">
                            <span className="label-text font">Spot name</span>
                            <input type="text" name='name' defaultValue={spot.name} placeholder="Tourist Spot Name" className="input input-bordered w-full " />
                        </label>
                        <label className="form-control w-full">
                            <span className="label-text">Country Name</span>
                            <select className="input h-[40px] input-bordered w-full" name="CName" defaultValue={spot.CName}>
                                <option value="">--Select country--</option> {/* Default option */}
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Thiland">Thailand</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Cambodia">Cambodia</option>
                            </select>
                        </label>
                    </div>
                    {/* name and photo */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <label className="form-control w-full">
                            <span className="label-text font">Location</span>
                            <input type="text" name='location' defaultValue={spot.location} placeholder="Location" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full ">
                            <span className="label-text">Photo URL</span>
                            <input type="text" name='photo' defaultValue={spot.photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* name and photo */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <label className="form-control w-full">
                            <span className="label-text font">Avarage Cost</span>
                            <input type="text" name='cost' defaultValue={spot.cost} placeholder="Avarage Cost" className="input input-bordered w-full " />
                        </label>
                        <label className="form-control w-full ">
                            <span className="label-text">Seasonality</span>
                            <input type="text" name='seasonality' defaultValue={spot.seasonality} placeholder="Seasonality" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* name and photo */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <label className="form-control w-full">
                            <span className="label-text font">Travel Time</span>
                            <input type="text" name='time' defaultValue={spot.time} placeholder="Treavel Time" className="input input-bordered w-full " />
                        </label>
                        <label className="form-control w-full ">
                            <span className="label-text">Visitor Per Year</span>
                            <input type="text" name='visitor' defaultValue={spot.visitor} placeholder="Visitor Per Year" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* name and photo */}
                    <div className=''>
                        <label className="form-control w-full ">
                            <span className="label-text">Short Description</span>
                            <input type="text" name='description' defaultValue={spot.description} placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div>
                        <input className='btn border border-[#0000ff] text-[#0000ff] hover:bg-[#0000ff] hover:text-white w-full ' type="submit" value="Update" />
                    </div>
                </form>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Update;