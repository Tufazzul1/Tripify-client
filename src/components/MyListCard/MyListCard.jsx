

import React from 'react';

const MyListTable = ({ list }) => {
    // Destructure the data from the list prop
    const { name, CName, photo, cost, seasonality } = list;

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* Table header */}
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Country Name</th>
                        <th>Seasonality</th>
                        <th>Cost</th>
                        <th>Action</th> 
                    </tr>
                </thead>
                {/* Table body */}
                <tbody>
                    <tr>
                        <td>
                            
                            <img src={photo} className="h-[100px] w-[200px]" alt="Spot" />
                        </td>
                        <td>{name}</td> 
                        <td>{CName}</td> 
                        <td>{seasonality}</td> 
                        <td>{cost}</td> 
                        <td className='space-x-2'>
                           
                            <button className="btn btn-primary">Update</button>
                            <button className="btn btn-error">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyListTable;
