import React, { Fragment } from 'react';
import {
    Avatar,
    Box,
    IconButton,
    Stack,
    SvgIcon,
    Tooltip,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Material-UI Icons
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PeopleIcon from '@mui/icons-material/People';

// Icons Feather
import { Menu } from 'react-feather';

// Hooks
import usePopover from '../hooks/shared/usePopover';

// Project Imports
import TopNavBar from './TopNavBar';
import NotificationsTopNav from '../components/Notifications/NotificationsTopNav';

// Standard Nav Bar Dimentions 
const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

export default function Navbar(props) {
    const theme = useTheme();
    const { onNavOpen } = props;
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
    const accountPopover = usePopover();

    return (
        <Fragment>
            <Box
                component="header"
                sx={{
                    backdropFilter: 'blur(6px)',
                    backgroundColor: '#f8f8f8',
                    border: 'none',
                    borderBottom: '1px solid #e6e6e6',
                    outline: 'none',
                    position: 'sticky',
                    left: {
                        lg: `${SIDE_NAV_WIDTH}px`
                    },
                    top: 0,
                    width: {
                        lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
                    },
                    zIndex: (theme) => theme.zIndex.appBar
                }}
            >
                <Stack
                    alignItems="center"
                    direction="row"
                    justifyContent="space-between"
                    spacing={2}
                    sx={{
                        minHeight: TOP_NAV_HEIGHT,
                        px: 2,
                    }}
                >
                    <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                    >
                        {!lgUp && (
                            <IconButton onClick={onNavOpen}>
                                <SvgIcon fontSize="small">
                                    <Menu />
                                </SvgIcon>
                            </IconButton>
                        )}
                        <Tooltip title="Search">
                            <IconButton>
                                <SvgIcon fontSize="small">
                                    <ManageSearchIcon />
                                </SvgIcon>
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                    >
                        <Tooltip title="Contacts">
                            <IconButton>
                                <SvgIcon fontSize="small">
                                    <PeopleIcon />
                                </SvgIcon>
                            </IconButton>
                        </Tooltip>
                        <NotificationsTopNav />
                        <Avatar
                            onClick={accountPopover.handleOpen}
                            ref={accountPopover.anchorRef}
                            sx={{
                                cursor: 'pointer',
                                height: 40,
                                width: 40
                            }}
                            src="/assets/avatars/default.png"
                        />
                    </Stack>
                </Stack>
            </Box>
            <TopNavBar
                anchorEl={accountPopover.anchorRef.current}
                open={accountPopover.open}
                onClose={accountPopover.handleClose}
            />
        </Fragment>
    );
};