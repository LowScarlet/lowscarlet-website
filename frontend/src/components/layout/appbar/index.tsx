import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import * as React from 'react';

import Brand from '../../brand';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import Menu from '@mui/material/Menu';

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

export default function HideAppBar(props: any) {
    const { isDark } = props
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
                        <Grid item xs={10} md={4} sx={{ textAlign: 'left' }}>
                            <Brand />
                        </Grid>
                        <Grid item py={2} xs={2} sx={{ textAlign: 'right' }} display={{ xs: 'block', md: 'none' }}>
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
                                    <MoreVertIcon />
                                </IconButton>

                                <Menu
                                    open={open}
                                    anchorEl={anchor}
                                    onClose={() => {
                                        setAnchor(null)
                                    }}
                                >
                                    <MenuItem>
                                        <ListItemText inset>Single</ListItemText>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemText inset>1.15</ListItemText>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemText inset>Double</ListItemText>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Check />
                                        </ListItemIcon>
                                        Custom: 1.2
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem>
                                        <ListItemText>Add space before paragraph</ListItemText>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemText>Add space after paragraph</ListItemText>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem>
                                        <ListItemText>Custom spacing...</ListItemText>
                                    </MenuItem>
                                </Menu>
                            </>
                        </Grid>
                        <Grid item md={8} sx={{ textAlign: 'right' }} display={{ xs: 'none', md: 'block' }}>
                            <Box justifyContent="flex-end" py={1.5} display='flex'>
                                <Tabs value={0} aria-label="basic tabs example">
                                    <Tab label="Portofolio" {...a11yProps(0)} />
                                    <Tab label="Skill" {...a11yProps(1)} />
                                    <Tab label="History" {...a11yProps(2)} />
                                    <Tab label="More" {...a11yProps(3)} />
                                </Tabs>
                                <Stack pl={2} py={1} direction="row" spacing={2}>
                                    <Button size="small" color='primary' variant='outlined'>Register</Button>
                                    <Button size="small" color='secondary' variant='outlined'>Login</Button>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
        </HideOnScroll>
        <Toolbar />
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