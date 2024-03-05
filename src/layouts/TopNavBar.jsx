import React, { Fragment } from "react";

// Material UI
import { Divider, MenuItem, MenuList, Popover } from '@mui/material';

export default function TopNavBar(props) {
    const { anchorEl, onClose, open } = props;

    return (
        <Fragment>
            <Popover
                anchorEl={anchorEl}
                anchorOrigin={{
                    horizontal: 'left',
                    vertical: 'bottom'
                }}
                onClose={onClose}
                open={open}
                PaperProps={{ sx: { width: 200 } }}
            >
                <MenuList
                    disablePadding
                    dense
                    sx={{
                        p: '4px',
                        '& > *': {
                            borderRadius: 1
                        }
                    }}
                >
                    <MenuItem>
                        Actualizaciones
                    </MenuItem>
                </MenuList>
                <MenuList
                    disablePadding
                    dense
                    sx={{
                        p: '4px',
                        '& > *': {
                            borderRadius: 1
                        }
                    }}
                >
                    <MenuItem>
                        Suscripción
                    </MenuItem>
                </MenuList>
                <MenuList
                    disablePadding
                    dense
                    sx={{
                        p: '4px',
                        '& > *': {
                            borderRadius: 1
                        }
                    }}
                >
                    <MenuItem>
                        Centro de ayuda y soporte
                    </MenuItem>
                </MenuList>
                <MenuList
                    disablePadding
                    dense
                    sx={{
                        p: '4px',
                        '& > *': {
                            borderRadius: 1
                        }
                    }}
                >
                    <MenuItem>
                        Sugerencias
                    </MenuItem>
                </MenuList>
                <MenuList
                    disablePadding
                    dense
                    sx={{
                        p: '4px',
                        '& > *': {
                            borderRadius: 1
                        }
                    }}
                >
                    <MenuItem>
                        Acerca de nosotros
                    </MenuItem>
                </MenuList>
                <MenuList
                    disablePadding
                    dense
                    sx={{
                        p: '4px',
                        '& > *': {
                            borderRadius: 1
                        }
                    }}
                >
                    <MenuItem>
                        Política de privacidad
                    </MenuItem>
                </MenuList>
                <Divider />
                <MenuList
                    disablePadding
                    dense
                    sx={{
                        p: '4px',
                        '& > *': {
                            borderRadius: 1
                        }
                    }}
                >
                    <MenuItem>
                        Salir
                    </MenuItem>
                </MenuList>
            </Popover>
        </Fragment>
    );
}

