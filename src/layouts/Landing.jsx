// Material UI
import { Box, Button, Stack, Link, Typography, useMediaQuery } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';

// React Router Dom
import { useNavigate } from 'react-router-dom';

// image Logo
import ImageLogo from '../assets/brand/agro_integrate_logo.svg';


// Styled Components
const LogoContainer = styled('div')({
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
});

const LogoIcon = styled('img')({
    marginRight: (theme) => theme.spacing(1),
    width: '64px',
    height: '64px',
});

export default function Landing() {
    const theme = useTheme();
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                backgroundImage: 'linear-gradient(80deg, #03363D, #BDD9D7)',
                display: 'flex',
                flex: '1 1 auto',
                flexDirection: {
                    xs: 'column-reverse',
                    md: 'row'
                },
                minHeight: '100vh',
            }}
        >
            <Box
                sx={{
                    alignItems: 'center',
                    backgroundColor: 'neutral.800',
                    backgroundImage: 'url("/gradient-bg.svg")',
                    backgroundPosition: 'top center',
                    backgroundRepeat: 'no-repeat',
                    display: lgUp ? 'flex' : 'none',
                    color: '#fff',
                    flex: {
                        xs: '0 0 auto',
                        md: '1 1 auto'
                    },
                    justifyContent: 'center',
                    p: {
                        xs: 4,
                        md: 8
                    }
                }}
            >
                <Box maxWidth="md">
                    <Typography
                        sx={{ mb: 2 }}
                        variant="h3"
                    >
                        Bienvenido a Agro Integrate
                    </Typography>
                    <Typography
                        variant='h6'
                        color="text.secondary"
                        sx={{ mb: 4 }}
                    >
                        Inteligencia Artificial y Aprendizaje Automático para las Granjas Avícolas <br></br>de la Próxima Generación.
                    </Typography>
                    <Stack
                        alignItems="center"
                        direction="row"
                        flexWrap="wrap"
                        gap={4}
                        sx={{
                            color: 'text.primary',
                            '& > *': {
                                color: 'neutral.400',
                                flex: '0 0 auto'
                            }
                        }}
                    >
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
                            <img src="/FarmerBrand.png" alt="Logo" style={{ width: '100%', height: '100%' }} />
                        </Box>
                    </Stack>
                </Box>
            </Box>
            <Box
                sx={{
                    backgroundColor: 'background.paper',
                    display: 'flex',
                    flex: {
                        xs: '1 1 auto',
                        md: '0 0 auto'
                    },
                    flexDirection: 'column',
                    justifyContent: {
                        md: 'center'
                    },
                    maxWidth: '100%',
                    p: {
                        xs: 4,
                        md: 8
                    },
                    width: {
                        md: 600
                    }
                }}
            >
                <div>
                    <Box sx={{ mb: 4 }}>
                        {smDown ? (
                        <LogoContainer>
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
                                <LogoIcon src={ImageLogo} alt="Logo" />
                            </Box>
                        </LogoContainer>
                        ) : null}
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            direction="row"
                            display="inline-flex"
                            spacing={1}
                            sx={{ textDecoration: 'none' }}
                        >
                            <Box
                                sx={{
                                    display: 'inline-flex',
                                    height: 24,
                                    width: 24
                                }}
                            />
                            <Box
                                sx={{
                                    color: 'text.primary',
                                    fontSize: 24,
                                    fontWeight: 800,
                                    letterSpacing: '0.65px',
                                    lineHeight: 1.5,
                                    '& span': {
                                        color: 'primary.main'
                                    }
                                }}
                            >
                                Inicia sesión o regístrate
                            </Box>
                        </Stack>
                        <Box
                            sx={{
                                mt: 5,
                                width: '100%',
                                maxWidth: '440px'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'grid',
                                    gap: 2,
                                    gridColumnGap: 3,
                                    gridTemplateColumns: {
                                        sm: 'repeat(2, 1fr)'
                                    },
                                    gridRowGap: {
                                        sm: 0
                                    }
                                }}
                            >
                                <Button
                                    sx={{
                                        position: 'relative',
                                        display: 'flex',
                                        height: '48px',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '4px',
                                        textAlign: 'center',
                                        fontSize: '1rem',
                                        fontWeight: 'medium',
                                        backgroundColor: '#03363D',
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: '#17494D'
                                        }
                                    }}
                                    onClick={() => navigate('/authentication')}
                                >
                                    Inicia sesión
                                </Button>
                                <Button
                                    sx={{
                                        position: 'relative',
                                        display: 'flex',
                                        height: '48px',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '4px',
                                        textAlign: 'center',
                                        fontSize: '1rem',
                                        fontWeight: 'medium',
                                        backgroundColor: '#03363D',
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: '#17494D'
                                        }
                                    }}
                                    onClick={() => navigate('/signup')}
                                >
                                    Regístrate
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </div>
            </Box>
        </Box>
    );
}