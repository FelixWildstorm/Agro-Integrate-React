import React, { Fragment, useCallback, useMemo, useRef, useState } from 'react';

// Material UI
import { Badge, IconButton, SvgIcon, Tooltip } from '@mui/material';

// Icons
import NotificationsIcon from '@mui/icons-material/Notifications';

// API Example 
import { notifications as initialNotifications } from './Notifications';

// Project Importer 
import NotificationsDropdown from './NotificationsDropdown';


const useCustomNotifications = () => {
  const [customNotifications, setCustomNotifications] = useState(initialNotifications);
  const unreadCount = useMemo(() => {
    return customNotifications.reduce((acc, notification) => acc + (notification.read ? 0 : 1), 0);
  }, [customNotifications]);

  const handleRemoveNotification = useCallback((notificationId) => {
    setCustomNotifications((prevState) => {
      return prevState.filter((notification) => notification.id !== notificationId);
    });
  }, []);

  const handleMarkAllAsReadNotification = useCallback(() => {
    setCustomNotifications((prevState) => {
      return prevState.map((notification) => ({
        ...notification,
        isRead: true
      }));
    });
  }, []);

  return {
    handleMarkAllAsReadNotification,
    handleRemoveNotification,
    customNotifications,
    unreadCount
  };
};


export default function NotificationsTopNav() {
  const anchorRef = useRef(null);
  const [notificationPopover, setNotificationPopover] = useState(false);
  const { handleRemoveNotification, handleMarkAllAsReadNotification, customNotifications, unreadCount } = useCustomNotifications();

  const openPopover = useCallback(() => {
    setNotificationPopover(true);
  }, []);

  const closePopover = useCallback(() => {
    setNotificationPopover(false);
  }, []);

  return (
    <Fragment>
      <Tooltip title="notificaciones">
        <IconButton
          ref={anchorRef}
          onClick={openPopover}
        >
          <Badge
            color="error"
            badgeContent={unreadCount}
          >
            <SvgIcon>
              <NotificationsIcon />
            </SvgIcon>
          </Badge>
        </IconButton>
      </Tooltip>
      <NotificationsDropdown
        anchorEl={anchorRef.current}
        customNotifications={customNotifications}
        onClose={closePopover}
        handleMarkAllAsReadNotification={handleMarkAllAsReadNotification}
        handleRemoveNotification={handleRemoveNotification}
        open={notificationPopover}
      />
    </Fragment>
  );

};