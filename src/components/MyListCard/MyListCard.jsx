

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyListCard = ({ list, setItem }) => {
    const { _id, name, CName, photo, cost, seasonality } = list;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tripify-server-five.vercel.app/spots/${_id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Spot has been deleted.",
                                icon: "success"
                            });
                            setItem((prevList) => prevList.filter((item) => item._id !== _id));
                        }
                    });
            }
        });
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table-fixed w-full border">
                    {/* Table header */}
                    <thead className="hidden md:table-header-group">
                        <tr className="text-center">
                            <th className="w-1/5">Photo</th>
                            <th className="w-1/5">Name</th>
                            <th className="w-1/5">Country Name</th>
                            <th className="w-1/5">Seasonality</th>
                            <th className="w-1/5">Action</th>
                        </tr>
                    </thead>
                    {/* Table body */}
                    <tbody className="block md:table-row-group text-center">
                        <tr className="block md:table-row">
                            <td className="w-1/5">
                                <img src={photo} className="h-[100px] w-[200px]" alt="Spot" />
                            </td>
                            <td className="w-1/5">{name}</td>
                            <td className="w-1/5">{CName}</td>
                            <td className="w-1/5">{seasonality}</td>
                            <td className="w-1/5 space-x-2">
                                <Link className="btn btn-primary" to={`/update/${_id}`}>Update</Link>
                                <button onClick={() => handleDelete(_id)} className="btn btn-error">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyListCard;

