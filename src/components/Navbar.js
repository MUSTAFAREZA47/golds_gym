import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
    const location = useLocation(); // Get current path

    return (
        <Stack display="flex" alignItems="center" justifyItems="center">
            <Stack
                display="flex"
                alignItems="center"
                justifyItems="center"
                top={0}
                bgcolor="white"
                boxShadow={5}
                zIndex={50}
                position="fixed"
                direction="row"
                justifyContent="space-around"
                borderRadius={6}
                sx={{
                    gap: { sm: '123px', xs: '40px' },
                    mt: { sm: '32px', xs: '20px' },
                    justifyContent: 'none',
                }}
                px="20px"
                py="10px"
            >
                <Link to="/">
                    <img
                        src={Logo}
                        alt="logo"
                        style={{
                            width: '48px',
                            height: '48px',
                            margin: '0px 20px',
                        }}
                    />
                </Link>
                <Stack
                    direction="row"
                    gap="40px"
                    fontFamily="Alegreya"
                    fontSize="24px"
                    alignItems="flex-end"
                >
                    <Link
                        to="/"
                        style={{
                            textDecoration: 'none',
                            color: '#3A1212',
                            borderBottom: location.pathname === '/' ? '3px solid #FF2625' : 'none',
                            paddingBottom: '5px',
                        }}
                    >
                        Home
                    </Link>
                    <a
                        href="#exercises"
                        style={{
                            textDecoration: 'none',
                            color: '#3A1212',
                            borderBottom: location.hash === '#exercises' ? '3px solid #FF2625' : 'none',
                            paddingBottom: '5px',
                        }}
                    >
                        Exercises
                    </a>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Navbar;
