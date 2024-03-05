import { useCallback, useRef, useState } from 'react';

// Custom hook for managing a popover
export default function usePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  // Open the popover
  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  // Close the popover
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  // Toggle the popover state between open and closed
  const handleToggle = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  // Return the necessary functions and state for using the popover
  return {
    anchorRef,
    handleClose,
    handleOpen,
    handleToggle,
    open
  };
}
