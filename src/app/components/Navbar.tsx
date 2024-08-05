
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const Navbar: React.FC = () => {


    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        My Application
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Link href="/" passHref>
                            <Button color="inherit">Home</Button>
                        </Link>

                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
