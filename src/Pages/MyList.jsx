import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import MyListCard from '../components/MyListCard/MyListCard';

const MyList = () => {

    const { user } = useAuth() || {};
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`https://tripify-server-five.vercel.app/myList/${user.email}`)
            .then(res => res.json())
            .then((data) => {
                setItem(data)
                console.log(data)
            })
    }, [user])
    return (
        <div>
            <h2 className="text-3xl mt-6 font-bold text-center mb-4">My added tourist spot list</h2>


            <div className='gap-5'>
                {
                    item?.map(list => <MyListCard
                        key={list._id}
                        list={list}
                        setItem={setItem}
                    ></MyListCard>)
                }
            </div>
        </div>
    );
};

export default MyList;