/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Grid, Typography, IconButton, Stack, Button, Grow, Zoom } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import useSWR from 'swr'
import Logo from '../../brand/logo';
import IconComp from '../../iconcomp/social'
import Skeleton from '@mui/material/Skeleton';

export default function Main(props: any) {
    const { isDark } = props
    const [res, setRes] = useState<any>({})
    const [loading, setLoading] = useState(true)

    const fetcher = async (...args: any) => {
        try {
            const res = await fetch(args, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            const data = await res.json()

            if (res.status === 200) {
                setRes(data)
            }
        } catch {
            setRes({})
        }
        setLoading(false)
    }
    useSWR('/api/me', fetcher)

    return (<>
        <Box style={{ backgroundColor: isDark ? '#0a0a0a' : 'white' }}>
            <Container maxWidth={"xl"}>
                <Box py={{ md: 10, xs: 5 }} px={{ md: 3 }}>
                    <Grid container xs={12} md={12} direction={{ md: 'row', xs: 'column-reverse' }}>
                        <Grid xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' }, padding: 0, paddingTop: 5, paddingBottom: 5 }}>
                            <Typography component="span">
                                {
                                    res.data && !loading ? ('Hello, my nickname is') : (<Skeleton variant="text" width="30%" />)
                                }
                            </Typography>
                            <Typography fontWeight='700' variant='h4' component="div">
                                {
                                    res.data && !loading ? (res.data.nickname) : (<Skeleton variant="text" width="40%" />)
                                }
                            </Typography>
                            <Typography pt={1.5} variant='h6' component="div">
                                {
                                    res.data && !loading ? (res.data.slogan) : (<Skeleton variant="text" width="80%" />)
                                }
                            </Typography>
                            <Box component="div">
                                {/* <IconButton aria-label="github-icon" size="large">
                                    <Skeleton variant="circular" width={25} height={25}/>
                                </IconButton> */}
                                <IconButton aria-label="github-icon" size="large">
                                    <IconComp icon="github" />
                                </IconButton>
                                <IconButton aria-label="instagram-icon" size="large">
                                    <IconComp icon="instagram" />
                                </IconButton>
                                <IconButton aria-label="linkedin-icon" size="large">
                                    <IconComp icon="linkedin" />
                                </IconButton>
                            </Box>
                            <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" spacing={2} pt={2.5}>
                                <Button disabled={res.data && !loading ? (false) : (true)} color="primary" variant="contained" startIcon={res.data && !loading ? (<SendIcon />) : (null)} sx={{ borderRadius: 28, minWidth: { xs: '100%', md: 100 }, minHeight: 30 }}>
                                    {res.data && !loading ? ('Explore') : ('')}
                                </Button>
                                <Button disabled={res.data && !loading ? (false) : (true)} color="success" variant="outlined" startIcon={res.data && !loading ? (<SendIcon />) : (null)} sx={{ borderRadius: 28, minWidth: { xs: '100%', md: 100 }, minHeight: 30 }}>
                                    {res.data && !loading ? ('Download CV') : ('')}
                                </Button>
                            </Stack>
                        </Grid>
                        <Grid xs={12} md={6} sx={{ padding: 0, justifyContent: { xs: 'center', md: 'right' }, display: "flex" }}>
                            <Box>
                                <Logo loading={!(res.data && !loading)} size={300}
                                    sx={{ width: 300, height: 300, border: '0.25em solid white' }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    </>)
}