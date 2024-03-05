import React, { Fragment, useState, useEffect, useCallback } from "react";

// React Router
import { Outlet, useLocation } from "react-router-dom";

// Material UI
import { styled } from "@mui/material/styles";

// Components
import Navbar from "./NavBar";
import { SideNav } from "../components/Sidebar/SideNavBar";
import { Typography } from "@mui/material";

// Project Layout
const SIDE_NAV_WIDTH = 280;

const LayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    [theme.breakpoints.up('lg')]: {
        paddingLeft: SIDE_NAV_WIDTH
    }
}));

const LayoutContainer = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    width: '100%'
});


export default function Main() {
    // Get the current pathname using the useLocation hook
    const { pathname } = useLocation();

    // Open the side nav
    const [openNav, setOpenNav] = useState(false);

    // Close the side nav
    const handlePathnameChange = useCallback(
        () => {
            if (openNav) {
                setOpenNav(false);
            }
        },
        [openNav]
    );

    // Close the side nav when the pathname changes
    useEffect(
        () => {
            handlePathnameChange();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [pathname]
    );

    useEffect(() => {
        // Scroll to the top when switching pages
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Fragment>
            {/* NavBar Start */}
            <Navbar
                onNavOpen={() => setOpenNav(true)}
            />
            {/* NavBar End  */}
            {/* Side Bar Start */}
            <SideNav
                onClose={() => setOpenNav(false)}
                open={openNav}
            />
            {/* Side Bar End */}
            {/* Main Layout Start */}
            <LayoutRoot>
                <LayoutContainer>
                    <Outlet />
                </LayoutContainer>
            </LayoutRoot>
            {/* Main Layout End */}
        </Fragment>
    );
}