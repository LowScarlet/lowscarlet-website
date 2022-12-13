import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Brand from '../../brand';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Check from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import MySpeedDial from '../speeddial'
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TimelineIcon from '@mui/icons-material/Timeline';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import ButtonGroup from '@mui/material/ButtonGroup';

import Link from '@mui/material/Link';

function HideOnScroll(props: any) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const actions = [
    { icon: <AssignmentIcon />, name: 'Portofolio' },
    { icon: <TimelineIcon />, name: 'Skill' },
    { icon: <HistoryToggleOffIcon />, name: 'History' },
];

export default function HideAppBar(props: any) {
    const [anchor, setAnchor] = useState<any>(null)
    const open = Boolean(anchor);
    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (<>
        <HideOnScroll {...props}>
            <AppBar color='inherit'>
                <Container maxWidth="xl">
                    <Grid container spacing={0}>
                        <Grid item xs={10} md={3} sx={{ textAlign: 'left' }}>
                            <Brand />
                        </Grid>
                        <Grid item py={1} xs={2} sx={{ textAlign: 'right' }} display={{ xs: 'block', md: 'none' }}>
                            <>
                                <IconButton
                                    aria-label="more"
                                    aria-controls={open ? 'long-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={(e) => {
                                        setAnchor(e.currentTarget)
                                    }}
                                >
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </IconButton>

                                <Menu
                                    open={open}
                                    anchorEl={anchor}
                                    onClose={() => {
                                        setAnchor(null)
                                    }}
                                >
                                    <Box p={2}>
                                        <Stack
                                            direction="row"
                                        >
                                            <Avatar alt="Low_Scarlet" src={`https://github.com/LowScarlet.png?size=128`} />

                                            <Stack
                                                pl={2}
                                                direction="column"
                                            >
                                                <Typography
                                                    variant="h6"
                                                    component="a"
                                                    href="/"
                                                    sx={{
                                                        fontWeight: 700,
                                                        letterSpacing: '.3rem',
                                                        color: 'inherit',
                                                        textDecoration: 'none',
                                                    }}
                                                >
                                                    LowScarlet
                                                </Typography>
                                                <Link
                                                    underline="hover"
                                                    component="button"
                                                    variant="body2"
                                                    onClick={() => {
                                                        console.info("I'm a button.");
                                                    }}
                                                    style={{ textAlign: 'left' }}
                                                >
                                                    Manage your account!
                                                </Link>

                                            </Stack>
                                        </Stack>
                                    </Box>
                                    <Divider />
                                    <li>
                                        <Typography
                                            pl={2} pt={1}
                                            color="text.secondary"
                                            display="block"
                                            variant="caption"
                                        >
                                            Account
                                        </Typography>
                                    </li>
                                    <MenuItem style={{ textTransform: 'capitalize' }}>
                                        <ListItemIcon>
                                            <Check />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </>
                        </Grid>
                        <Grid item md={9} sx={{ textAlign: 'right' }} display={{ xs: 'none', md: 'block' }}>
                            <Box justifyContent="flex-end" py={0} display='flex'>
                                <Tabs value={-1} aria-label="basic tabs example">
                                    {
                                        actions.map((data: any) => {
                                            return (<>
                                                <Tab iconPosition="start" icon={data.icon} label={data.name} {...a11yProps(data.name)} />
                                            </>)
                                        })
                                    }
                                </Tabs>
                                <Stack pl={2} py={2} direction="row" spacing={2}>
                                    <ButtonGroup size="small" aria-label="small button group">
                                        <Button startIcon={<AppRegistrationIcon />} size="small" color='primary' variant='outlined'>Register</Button>
                                        <Button startIcon={<LoginIcon />} size="small" color='success' variant='outlined'>Login</Button>
                                    </ButtonGroup>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
        </HideOnScroll>
        <Toolbar />
        <MySpeedDial {...{ actions }} />
    </>);
}

{/* <Toolbar>
<Brand avatar={true} />
<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
    <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
    >
        <Logo size={128} />
    </IconButton>
</Box>
<Brand avatar={false} mobile={true} />
<Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
    {pages.map((page) => (
        <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
        >
            {page}
        </Button>
    ))}
</Box>

<Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
    <Tooltip title="Open Menu">
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenUserMenu}
            color="inherit"
        >
            <MenuIcon />
        </IconButton>
    </Tooltip>
    <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
    >
        {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
            </MenuItem>
        ))}
    </Menu>
</Box>
</Toolbar> */}