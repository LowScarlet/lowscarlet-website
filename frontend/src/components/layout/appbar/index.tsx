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
    const [isLogin, setIsLogin] = useState(true)
    const open = Boolean(anchor);
    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (<>
        <HideOnScroll {...props}>
            <AppBar color='inherit' component="nav">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={9} sm={7} md={3}>
                                <Brand />
                            </Grid>
                            <Grid item xs={4} md={6} justifyContent="center" display={{ xs: 'none', md: 'flex' }}>
                                <Box >
                                    <Tabs
                                        value={0}
                                        textColor="secondary"
                                        indicatorColor="primary"
                                        aria-label="secondary tabs example"
                                    >
                                        {
                                            actions.map((data: any) => {
                                                return (<>
                                                    <Tab iconPosition="start" icon={data.icon} label={data.name} {...a11yProps(data.name)} />
                                                </>)
                                            })
                                        }
                                    </Tabs>
                                </Box>
                            </Grid>
                            <Grid item xs={3} sm={5} md={3} lg={3}>
                                {
                                    isLogin ? (
                                        <Box py={1.25} display={'flex'} justifyContent="flex-end">
                                            <Stack direction="row" py={1}>
                                                <Stack direction="column" textAlign={'end'} display={{ xs: 'none', sm: 'flex' }}>
                                                    <Typography
                                                        variant="caption"
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
                                                    <Typography
                                                        variant="caption"
                                                        component="a"
                                                        sx={{
                                                            fontWeight: 200,
                                                            color: 'inherit',
                                                            textDecoration: 'none',
                                                        }}
                                                    >
                                                        Welcome, LowScarlet
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                            <IconButton sx={{ width: 55, height: 55 }}
                                                aria-controls={open ? 'long-menu' : undefined}
                                                aria-expanded={open ? 'true' : undefined}
                                                aria-haspopup="true"
                                                onClick={(e) => {
                                                    setAnchor(e.currentTarget)
                                                }}>
                                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                            </IconButton>
                                        </Box>
                                    ) : (<>
                                        <Box py={1.25} display={{ xs: 'flex', sm: 'none' }} justifyContent="flex-end">
                                            <IconButton size="small"
                                                aria-controls={open ? 'long-menu' : undefined}
                                                aria-expanded={open ? 'true' : undefined}
                                                aria-haspopup="true"
                                                onClick={(e) => {
                                                    setAnchor(e.currentTarget)
                                                }}>
                                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                            </IconButton>
                                        </Box>
                                        <Box height={'100%'} py={2} display={{ xs: 'none', sm: 'flex' }} justifyContent="flex-end">
                                            <Stack direction="row" spacing={2}>
                                                <ButtonGroup size="small" aria-label="small button group">
                                                    <Button startIcon={<AppRegistrationIcon />} size="small" color='primary' variant='outlined'>Register</Button>
                                                    <Button startIcon={<LoginIcon />} size="small" color='success' variant='outlined'>Login</Button>
                                                </ButtonGroup>
                                            </Stack>
                                        </Box>
                                    </>)
                                }
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>

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
            </AppBar>
        </HideOnScroll>
        <Toolbar />
        <MySpeedDial {...{ actions }} />
    </>);
}

{/* <Grid container spacing={0}>
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
</Grid> */}