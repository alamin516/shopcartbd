import React from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';

const ContactPage = () => {
    return (
        <div>
            <h2 className="text-2xl mb-6 font-semibold text-center text-white py-3 bg-gray-600">Contact</h2>
            <Container maxWidth="lg" className="mt-10">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <form className="rounded-lg p-6">
                            <TextField
                                label="Full Name"
                                variant="outlined"
                                fullWidth
                                className="mb-4"
                                InputProps={{ className: 'bg-white rounded-md mb-2' }}
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                className="mb-4"
                                InputProps={{ className: 'bg-white rounded-md mb-2' }}
                            />
                            <TextField
                                label="Message"
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                                className="mb-4"
                                InputProps={{ className: 'bg-white rounded-md mb-2' }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                className="py-2 text-white rounded-md mb-2"
                            >
                                Send Message
                            </Button>
                        </form>
                        <div className="mt-8">
                            <Typography variant="h5" className="mb-2 font-semibold">
                                Contact Information
                            </Typography>
                            <Typography variant="body1" className="mb-2">
                                Phone: +1234567890
                            </Typography>
                            <Typography variant="body1" className="mb-2">
                                Email: example@example.com
                            </Typography>
                            <Typography variant="body1">
                                Shop Location: 123 Main Street, City, Country
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* Replace this div with your map component */}
                        <div style={{ width: '100%', height: '400px' }}>
                            <iframe
                                title="Location Map"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58575.346208572875!2d89.0011648!3d23.4258432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1704302369664!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ContactPage;
