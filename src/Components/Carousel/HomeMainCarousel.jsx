import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { carouselData } from '../../data/carouselData';

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};

const HomeMainCarousel = () => {
    const items = carouselData.map((item) =>
        <img className='cursor-pointer lg:h-[714px] h-full w-full object-cover' src={item.image} alt='' role='presentation' />

    )
    return (
        <div className='z-5'>
            <AliceCarousel
                items={items}
                infinite
                autoPlay
                disableDotsControls
                disableButtonsControls
                animationType="flip"
                animationDuration={800}
                autoPlayInterval={2000}
                mouseTracking
                responsive={responsive}
            />
        </div>
    )
}


export default HomeMainCarousel;