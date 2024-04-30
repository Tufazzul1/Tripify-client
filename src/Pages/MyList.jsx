import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import MyListCard from '../components/MyListCard/MyListCard';
import Footer from '../components/Footer/Footer';

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
            <div className='h-[250px] mt-3 flex items-center justify-center bg-[#2d0057CC]'>
                <h3 className="text-2xl md:text-4xl font-bold text-white">My Added Tourist Spots</h3>

            </div>


            <div className=' mt-5'>
                {
                    item?.map(list => <MyListCard
                        key={list._id}
                        list={list}
                        setItem={setItem}
                    ></MyListCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyList;