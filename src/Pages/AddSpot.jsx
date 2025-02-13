import React from 'react';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2'
import Footer from '../components/Footer/Footer';

const AddSpot = () => {
    const { user } = useAuth() || {}
    // console.log(user)

    const handleAddSpot = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const CName = form.CName.value;
        const location = form.location.value;
        const photo = form.photo.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const visitor = form.visitor.value;
        const time = form.time.value;
        const description = form.description.value;
        const UserName = user.displayName;
        const email = user.email

        const spot = { name, CName, location, time, photo, cost, seasonality, visitor, description, email, UserName }
        // console.log(spot)


        // send data to the server
        fetch('https://tripify-server-five.vercel.app/spots', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(spot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Spot added successfuly',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset()
                }
            })
    }
    return (
        <div>
            <div className='h-[250px] mt-3 flex items-center justify-center bg-[#2d0057CC]'>
                <h3 className="text-4xl font-bold text-white">Add Tourist Spot</h3>

            </div>
            <form onSubmit={handleAddSpot} className='mt-4 space-y-3 p-4'>
                {/* name and photo */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <label className="form-control w-full">
                        <span className="label-text font">Spot name</span>
                        <input type="text" name='name' placeholder="Tourist Spot Name" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full">
                        <span className="label-text">Country Name</span>
                        <select className="input h-[40px] input-bordered w-full" name="CName">
                            <option value="">--Select country--</option>
                            <option value="bangladesh">Bangladesh</option>
                            <option value="thiland">Thailand</option>
                            <option value="indonesia">Indonesia</option>
                            <option value="malaysia">Malaysia</option>
                            <option value="vietnam">Vietnam</option>
                            <option value="cambodia">Cambodia</option>
                        </select>
                    </label>
                </div>
                {/* name and photo */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <label className="form-control w-full">
                        <span className="label-text font">Location</span>
                        <input type="text" name='location' placeholder="Location" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full ">
                        <span className="label-text">Photo URL</span>
                        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* name and photo */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <label className="form-control w-full">
                        <span className="label-text font">Avarage Cost</span>
                        <input type="text" name='cost' placeholder="Avarage Cost" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <span className="label-text">Seasonality</span>
                        <input type="text" name='seasonality' placeholder="Seasonality" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* name and photo */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <label className="form-control w-full">
                        <span className="label-text font">Travel Time</span>
                        <input type="text" name='time' placeholder="Treavel Time" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <span className="label-text">Visitor Per Year</span>
                        <input type="text" name='visitor' placeholder="Visitor Per Year" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* name and photo */}
                <div className=''>
                    <label className="form-control w-full ">
                        <span className="label-text">Short Description</span>
                        <input type="text" name='description' placeholder="Short Description" className="input input-bordered w-full" />
                    </label>
                </div>

                <div>
                    <input className='btn border border-[#0000ff] text-[#0000ff] hover:bg-[#0000ff] hover:text-white w-full ' type="submit" value="Add" />
                </div>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddSpot;