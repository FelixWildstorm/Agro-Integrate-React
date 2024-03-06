import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// React Query 
import { QueryClient, QueryClientProvider } from 'react-query';

// Localization
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// date-fns
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// Layouts
import Main from './layouts/Main';

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
                {protectedRoutes.map((route, index) => {
                  return (
                    <Route
                      path={route.path}
                      element={route.element}
                      key={index}
                    />
                  )
                })}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </UserContextProvider>
        </LocalizationProvider>
      </QueryClientProvider>
      </ThemeCustomization>
    </Fragment>
  );
};