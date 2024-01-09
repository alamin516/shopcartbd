import { Alert, Button, Card, CardContent, CardMedia, Grid, Snackbar, Typography } from '@mui/material'
import React from 'react'

const ProductStyle1 = ({ handleAddToCart, product, showAlert, handleCloseAlert }) => {

    return (
        <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card sx={{ height: '100%' }}>
                <CardMedia
                    component="img"
                    image={product.imageSrc}
                    alt={product.name}
                    className='h-[300px] object-scale-down'
                />
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {product.price}
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => handleAddToCart(product, product.quantity)}
                        fullWidth
                    >
                        Add to Cart
                    </Button>
                    {/* {isOpen && <CartSidebar isOpen={isOpen} setIsOpen={setIsOpen} />} */}
                    <Snackbar open={showAlert} autoHideDuration={2000} onClose={handleCloseAlert}>
                        <Alert onClose={handleCloseAlert} severity="warning" sx={{ width: '100%' }}>
                            Quantity cannot exceed 10.
                        </Alert>
                    </Snackbar>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default ProductStyle1