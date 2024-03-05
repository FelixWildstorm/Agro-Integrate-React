import React, { Fragment } from 'react';

// Date Format 
import { format } from 'date-fns';

// Material UI
import {
    Avatar,
    Box,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Popover,
    Stack,
    SvgIcon,
    Tooltip,
    Typography
} from '@mui/material';

// Icons 
import PeopleIcon from '@mui/icons-material/People';
import MailIcon from '@mui/icons-material/Mail';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CloseIcon from '@mui/icons-material/Close';

// Project Import
import PerfectScroll from '../../layouts/Scrollbar';

const renderContent = (notification) => {
    switch (notification.type) {
        case 'job_add': {
            const createdAt = format(notification.createdAt, 'MMM dd, h:mm a');

            return (
                <>
                    <ListItemAvatar sx={{ mt: 0.5 }}>
                        <Avatar src={notification.avatar}>
                            <SvgIcon>
                                <PeopleIcon />
                            </SvgIcon>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={(
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    flexWrap: 'wrap'
                                }}
                            >
                                <Typography
                                    sx={{ mr: 0.5 }}
                                    variant="subtitle2"
                                >
                                    {notification.author}
                                </Typography>
                                <Typography
                                    sx={{ mr: 0.5 }}
                                    variant="body2"
                                >
                                    added a new job
                                </Typography>
                                <Link
                                    href="#"
                                    underline="always"
                                    variant="body2"
                                >
                                    {notification.job}
                                </Link>
                            </Box>
                        )}
                        secondary={(
                            <Typography
                                color="text.secondary"
                                variant="caption"
                            >
                                {createdAt}
                            </Typography>
                        )}
                        sx={{ my: 0 }}
                    />
                </>
            );
        }
        case 'new_feature': {
            const createdAt = format(notification.createdAt, 'MMM dd, h:mm a');

            return (
                <>
                    <ListItemAvatar sx={{ mt: 0.5 }}>
                        <Avatar>
                            <SvgIcon>
                                <ChatBubbleOutlineIcon />
                            </SvgIcon>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={(
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    flexWrap: 'wrap'
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    sx={{ mr: 0.5 }}
                                >
                                    New feature!
                                </Typography>
                                <Typography variant="body2">
                                    {notification.description}
                                </Typography>
                            </Box>
                        )}
                        secondary={(
                            <Typography
                                color="text.secondary"
                                variant="caption"
                            >
                                {createdAt}
                            </Typography>
                        )}
                        sx={{ my: 0 }}
                    />
                </>
            );
        }
        case 'company_created': {
            const createdAt = format(notification.createdAt, 'MMM dd, h:mm a');

            return (
                <>
                    <ListItemAvatar sx={{ mt: 0.5 }}>
                        <Avatar src={notification.avatar}>
                            <SvgIcon>
                                <PeopleIcon />
                            </SvgIcon>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={(
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    m: 0
                                }}
                            >
                                <Typography
                                    sx={{ mr: 0.5 }}
                                    variant="subtitle2"
                                >
                                    {notification.author}
                                </Typography>
                                <Typography
                                    sx={{ mr: 0.5 }}
                                    variant="body2"
                                >
                                    created
                                </Typography>
                                <Link
                                    href="#"
                                    underline="always"
                                    variant="body2"
                                >
                                    {notification.company}
                                </Link>
                            </Box>
                        )}
                        secondary={(
                            <Typography
                                color="text.secondary"
                                variant="caption"
                            >
                                {createdAt}
                            </Typography>
                        )}
                        sx={{ my: 0 }}
                    />
                </>
            );
        }
        default:
            return null;
    }
};

export default function NotificationsTopNav(props) {
    const {
        anchorEl,
        customNotifications,
        onClose,
        handleMarkAllAsReadNotification,
        handleRemoveNotification,
        open = false,
        ...other
    } = props;

    const isEmpty = customNotifications.length === 0;

    return (
        <Fragment>
            <Popover
                anchorEl={anchorEl}
                anchorOrigin={{
                    horizontal: 'left',
                    vertical: 'bottom'
                }}
                disableScrollLock
                onClose={onClose}
                open={open}
                PaperProps={{ sx: { width: 380 } }}
                {...other}>
                <Stack
                    alignItems="center"
                    direction="row"
                    justifyContent="space-between"
                    spacing={2}
                    sx={{
                        px: 3,
                        py: 2
                    }}
                >
                    <Typography
                        color="inherit"
                        variant="h6"
                    >
                        Notifications
                    </Typography>
                    <Tooltip title="Mark all as read">
                        <IconButton
                            onClick={handleMarkAllAsReadNotification}
                            size="small"
                            color="inherit"
                        >
                            <SvgIcon>
                                <MailIcon />
                            </SvgIcon>
                        </IconButton>
                    </Tooltip>
                </Stack>
                {isEmpty
                    ? (
                        <Box sx={{ p: 2 }}>
                            <Typography variant="subtitle2">
                                There are no notifications
                            </Typography>
                        </Box>
                    )
                    : (
                        <PerfectScroll sx={{ maxHeight: 400 }}>
                            <List disablePadding>
                                {customNotifications.map((notification) => (
                                    <ListItem
                                        divider
                                        key={notification.id}
                                        sx={{
                                            alignItems: 'flex-start',
                                            '&:hover': {
                                                backgroundColor: 'action.hover'
                                            },
                                            '& .MuiListItemSecondaryAction-root': {
                                                top: '24%'
                                            }
                                        }}
                                        secondaryAction={(
                                            <Tooltip title="Remove">
                                                <IconButton
                                                    edge="end"
                                                    onClick={() => handleRemoveNotification?.(notification.id)}
                                                    size="small"
                                                >
                                                    <SvgIcon>
                                                        <CloseIcon />
                                                    </SvgIcon>
                                                </IconButton>
                                            </Tooltip>
                                        )}
                                    >
                                        {renderContent(notification)}
                                    </ListItem>
                                ))}
                            </List>
                        </PerfectScroll>
                    )}
            </Popover>
        </Fragment>
    );
};