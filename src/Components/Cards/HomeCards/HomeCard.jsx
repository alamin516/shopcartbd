
import { FavoriteBorderOutlined, FavoriteOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({ product }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const { id, imageUrl, brand, title, price, color, discountedPrice, description } = product;

    useEffect(() => {
        const storedFavorite = localStorage.getItem(`Favorite_${id}`);
        if (storedFavorite) {
            setIsFavorite(JSON.parse(storedFavorite));
        }
    }, [id]);

    const toggleFavorite = () => {
        const newFavoriteStatus = !isFavorite;
        setIsFavorite(newFavoriteStatus);
        localStorage.setItem(`Favorite_${id}`, JSON.stringify(newFavoriteStatus));
    };

    return (
        <Link to={`/product/${id}`}>
            <div className='cursor-pointer bg-white overflow-hidden mx-3'>
                <div className='border rounded-sm w-full h-[22rem] p-4 pb-5'>
                    <div className='h-[13rem] w-full p-1'>
                        <img className='object-cover object-top w-full h-full' src={imageUrl} alt="" />
                    </div>
                    <div>
                        <h3 className='text-base font-medium text-gray-900'>{title}</h3>
                        <p className='my-2 text-sm text-gray-500'>{discountedPrice !== '' ? <span>$<del>{price}</del> {' '}{' '} $<b>{discountedPrice}</b></span> : <span>$<b>{price}</b></span>}</p>
                        {/* <div className='flex justify-between'>
                            <button className='px-3 py-1 text-sm bg-blue-500 rounded-sm text-white '>
                                Add To Card
                            </button>
                            <div>
                                {isFavorite ? (
                                    <FavoriteOutlined
                                        className=' hover:scale-110 text-rose-500'
                                        sx={{ width: '30px', height: '30px', padding: '2px', borderRadius: '50%' }}
                                        onClick={toggleFavorite}
                                    />
                                ) : (
                                    <FavoriteBorderOutlined
                                        className='hover:scale-110 text-rose-500'
                                        sx={{ width: '30px', height: '30px', padding: '2px', borderRadius: '50%' }}
                                        onClick={toggleFavorite}
                                    />
                                )}
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default HomeCard


