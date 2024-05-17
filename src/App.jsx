import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// React Query 
import { QueryClient, QueryClientProvider } from 'react-query';

// Material-UI
import { Avatar, Box, AppBar, Link, Typography } from '@mui/material';

// Localization
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// date-fns
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// Layouts
import Main from './layouts/Main';
import Landing from './layouts/Landing';

// Components
import NotFound from './components/NotFound/NotFound';

// Routes
import protectedRoutes from './routes/ProtectedRoutes';
import publicRoutes from './routes/PublicRoutes';

// User Context
import UserContextProvider from './context/UserContext';
import ThemeCustomization from './theme';

// React Query Client
const queryClient = new QueryClient();

export default function App() {
  return (
    <Fragment>
      <ThemeCustomization>
        <QueryClientProvider client={queryClient}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <UserContextProvider>
              <Box className="body">
                <Box sx={{ display: 'block' }} className="page-wrapper">
                  <Box
                    className="navbar w-nav"
                  >
                    <Box className="nav-container">
                      <Link href="/" aria-current="page" className="brands w-nav-brand w--current">
                          <Box sx={{ m: 3 }}>
                            <img src="images/Logo.svg" loading="lazy" alt="Corporate Logo" className="image" />
                          </Box>
                      </Link>
                    </Box>
                  </Box>
                  <Box className="service-section wf-section">
                    <Box className="border-container">
                      <Box className="main-container">
                        <BrowserRouter>
                          <Routes>
                            {publicRoutes.map((route, index) => {
                              return (
                                <Route
                                  path={route.path}
                                  element={route.element}
                                  key={index}
                                />
                              )
                            })}
                            <Route path="/" element={<Landing />}>
                              {protectedRoutes.map((route, index) => {
                                return (
                                  <Route
                                    path={route.path}
                                    element={route.element}
                                    key={index}
                                  />
                                )
                              })}
                            </Route>
                            <Route path="*" element={<NotFound />} />
                          </Routes>
                        </BrowserRouter>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="footer">
                  <Box className="section wf-section">
                    <Box className="border-container">
                      <Box className="main-container footer-container">
                        <Box sx={{ m: 3 }}>
                          <Typography variant="body2" color="textSecondary" align="center">
                            © {new Date().getFullYear()}, Agro Integrate
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </UserContextProvider>
          </LocalizationProvider>
        </QueryClientProvider>
      </ThemeCustomization>
    </Fragment>
  );
};