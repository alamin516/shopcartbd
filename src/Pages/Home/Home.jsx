import React from 'react'
import HomeMainCarousel from '../../Components/Carousel/HomeMainCarousel'
import HomeCarouselSection from '../../Components/HomeSections/HomeCarouselSection'
import { mens_kurta } from '../../data/Men/menKurta'
import PromoSectionHome from '../../Components/PromoSections/PromoSection'
import ProductStyleOne from '../../Components/Cards/Products/ProductStyleOne'

const Home = () => {
    

    return (
        <div>
            <HomeMainCarousel></HomeMainCarousel>
            {/* <div className='space-y-10 py-10'>
                <HomeCarouselSection data={mens_kurta} title={"Men's Kurta"} />
            </div> */}

            <div className="w-9/12 mx-auto grid grid-cols-4 gap-5 mb-10">
                
            </div>
                <ProductStyleOne/>
            <div>
                <PromoSectionHome />
            </div>
 
        </div>
    )
}

export default Home