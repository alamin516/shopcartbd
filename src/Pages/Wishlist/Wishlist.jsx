import { Button, Card, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../../features/wishlist/wishlistSlice';
import { Link } from 'react-router-dom';
import { ArrowBack, DeleteForeverOutlined } from '@mui/icons-material';

const Wishlist = () => {
  const wishlists = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState(false);

  const wishlistEmpty = wishlists?.length === 0;


  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id))

    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  }

  return (
    <div>
      <h2 className="text-2xl mb-6 font-semibold text-center text-white py-3 bg-gray-600">Wishlist</h2>
      <Container maxWidth="md" sx={{ marginTop: '40px', marginBottom: '40px' }}>
        {wishlistEmpty ? (
          <div className='text-center py-28'>
            <Typography variant="body1" className="text-lg text-gray-600 text-center pb-5">
              Your wishlist is empty.
            </Typography>
            <Link to={`/`} >
              <Button
                variant="outlined"
                className="font-medium text-indigo-600 hover:text-indigo-500 rounded-md"
                startIcon={<ArrowBack />}
              >
                Shopping Now
              </Button>
            </Link>
          </div>
        ) : (
          <Grid container spacing={3} >
            <Grid item xs={12} className="flex justify-between border-b-2 pb-3">
              <Typography variant="subtitle1" sx={{ width: '40%' }}>
                Product
              </Typography>
              <Typography variant="subtitle1" sx={{ width: '20%' }}>
                Price
              </Typography>
              <Typography variant="subtitle1" sx={{ width: '20%' }}>
                Action
              </Typography>
            </Grid>

            {wishlists?.map((item) => (
              <Grid key={item.id} container spacing={1} className="flex items-center justify-between py-2 border-b-2" alignItems="flex-start">
                <Grid item sx={{ display: 'flex', alignItems: 'center', width: '40%' }}>
                  <img className="w-40 border-2" src={item.imageSrc} alt="" />
                  <div style={{ marginLeft: '1rem' }}>
                    <Typography variant="body1" className="mb-6">
                      {item.name}
                    </Typography>
                  </div>
                </Grid>
                <Grid item sx={{ display: 'flex', alignItems: 'center', width: '20%', height: '100%' }}>
                  <Typography variant="body1">{item.price}</Typography>
                </Grid>
                <Grid item sx={{ display: 'flex', alignItems: 'center', width: '20%', height: '100%' }}>
                  <Button
                    variant="contained"
                    className="font-semibold"
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    style={{ position: 'relative' }}
                  >
                    <DeleteForeverOutlined
                      className={`text-4xl ${animate ? 'animate-pulse' : ''}`}
                    />
                  </Button>
                </Grid>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  )
}

export default Wishlist