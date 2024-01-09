import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeCard from "../Cards/HomeCards/HomeCard";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { Button } from "@mui/material";
import { mens_kurta } from "../../data/Men/menKurta";
import axios from "axios";

const HomeCarouselSection = ({data, title}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [products, setProducts] = useState([]);


  useEffect(()=>{
    const getProducts = async()=>{
      try {
        const response = await axios.get('https://neverninebd.com/wp-json/wp/v2/product?per_page=100');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    getProducts();
  },[])

  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 5 },
  };

  const slidePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const slideNext = () => {
    setActiveIndex((prevIndex) => (prevIndex < mens_kurta.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(0, 10).map((item) => <HomeCard product={item} />);

  return (
    <div className="container mx-auto relative lg:px-4 lg:px-8">
      <h2 className="px-7 text-xl font-bold">{title}</h2>
      <div className="relative p-5 gap-2 home-product-card-carousel">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          mouseTracking
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
            }}
            aria-label="prev"
          >
            <KeyboardArrowLeft sx={{ transform: "rotate(-90deg)" }} />
          </Button>
        )}

        {activeIndex !== items.length - 1 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeft sx={{ transform: "rotate(90deg)" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeCarouselSection;
