import React, { Fragment } from 'react';

// Material UI
import { Box, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";

// Image Logo
import ImageLogo from '../assets/brand/agro_integrate_logo.svg';

const LogoContainer = styled('div')({
    display: 'flex',
    alignItems: 'center', // Center vertically
});

const LogoIcon = styled('img')({
    marginRight: (theme) => theme.spacing(1),
    width: '60px',
    height: '60px', 
});

export default function Logo() {

    const getLogoSize = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1200) {
            return 'Agro Integrate';
        } else if (screenWidth >= 960) {
            return 'Agro Integrate';
        } else {
            return 'Agro Integrate';
        }
    };

    return (
        <Fragment>
            <Box
                sx={{
                    margin: "auto",
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 'auto',
                    height: 'auto',
                }}
            >
                <LogoContainer>
                    <LogoIcon
                        src={ImageLogo}
                        alt="Logo"
                        style={{ width: '100%', height: '100%' }}
                    />
                    <Typography variant="h6">{getLogoSize()}</Typography>
                </LogoContainer>
            </Box>
        </Fragment>
    );
};