import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function SpeedDialTooltipOpen(props: any) {
    const { actions } = props
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (<>
        <Backdrop open={open} sx={{ zIndex: 100 }} />
        <Box display={{ xs: 'inherit', md: 'none' }} sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', bottom: 0, right: 0, zIndex: 100 }}>
            <SpeedDial
                color="secondary"
                ariaLabel="SpeedDial tooltip example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon openIcon={<CloseIcon />} icon={<MenuIcon />} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action: any) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen
                        onClick={handleClose}
                    />
                ))}
            </SpeedDial>
        </Box>
    </>);
}