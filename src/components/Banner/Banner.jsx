import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


const Banner = () => {
    return (
        <div>
            <div className='mt-6'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    speed={800}
                    freeMode={true}
                    modules={[Navigation, Autoplay]}
                >
                    <SwiperSlide>
                        <div className="hero min-h-[550px] rounded-lg"  style={{ backgroundImage: 'url(https://i.ibb.co/W3ZsJw2/amjad-rana-Mr-KPi-yaj-C0-unsplash.jpg)' }}>
                            <div className="hero-overlay bg-opacity-50"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-lg">
                                    <h1 className="mb-5 text-4xl font-bold animate__animated  animate__rubberBand">Embark on a Journey Beyond the Ordinary</h1>
                                    <p className="mb-5 animate__animated  animate__rubberBand">Explore exotic locations, vibrant cities, and scenic landscapes with our tailored travel experiences. Whether you're seeking relaxation or excitement, we have a journey for you.</p>
                                 
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero min-h-[550px] rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/f24ZWzG/md-shaifuzzaman-ayon-2-k-GPPl3s-L0-unsplash.jpg)' }}>
                            <div className="hero-overlay bg-opacity-50"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-lg">
                                    <h1 className="mb-5 text-4xl font-bold animate__animated  animate__rubberBand">Discover the Beauty of the World</h1>
                                    <p className="mb-5 animate__animated  animate__rubberBand">From ancient landmarks to modern wonders, our travel packages take you to the heart of every destination. Join us for a unique travel experience filled with unforgettable moments.</p>
                               
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero min-h-[550px] rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/Wy1GjJt/s-m-ibrahim-1-NEJki-TTu-LU-unsplash.jpg)'}}>
                            <div className="hero-overlay bg-opacity-50"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-lg">
                                    <h1 className="mb-5 text-4xl font-bold animate__animated  animate__rubberBand">Unlock Your Sense of Adventure</h1>
                                    <p className="mb-5 animate__animated  animate__rubberBand"> Travel is about more than just reaching a place—it's about experiencing new cultures and creating lasting memories. Let us guide you on a journey that transforms the way you see the world.</p>
                            
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;