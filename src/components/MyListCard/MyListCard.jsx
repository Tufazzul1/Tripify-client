


import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyListCard = ({ list, setItem }) => {
    // Destructure the data from the list prop
    const { _id, name, CName, photo, cost, seasonality } = list;

    const handleDelete = _id => {
        console.log(_id)

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
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Spot has been deleted.",
                                icon: "success"
                            });
                            setItem((prevList) => prevList.filter((item) => item._id !== _id))
                        }
                    })
            }
        });
    }

    return (
        <div className="">
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

                            <Link className="btn btn-primary" to={`/update/${_id}`}>Update</Link>
                            <button onClick={() => handleDelete(_id)} className="btn btn-error" >Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyListCard;
