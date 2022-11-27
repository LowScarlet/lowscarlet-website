/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Grid, Typography, IconButton, Stack, Button, Grow, Zoom } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import useSWR from 'swr'
import Logo from '../../brand/logo';
import IconComp from '../../iconcomp/social'

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
                <Box py={{ md: 10, xs: 5 }}>
                    <Grid container xs={12} md={12} direction={{ md: 'row', xs: 'column-reverse' }}>
                        <Grid xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' }, padding: 0, paddingTop: 5, paddingBottom: 5 }}>
                            <Grow in={res.data ? true : false}>
                                <Typography component="span">
                                    Hello, my nickname is
                                </Typography>
                            </Grow>
                            <Grow
                                in={res.data ? true : false}
                                style={{ transformOrigin: '0 0 0' }}
                                {...(res.data ? { timeout: 500 } : {})}
                            >
                                <Typography fontWeight='700' variant='h4' component="div">
                                    {
                                        res.data ? (res.data.nickname) : ('')
                                    }
                                </Typography>
                            </Grow>
                            <Grow
                                in={res.data ? true : false}
                                style={{ transformOrigin: '0 0 0' }}
                                {...(res.data ? { timeout: 1000 } : {})}
                            >
                                <Typography pt={1.5} variant='h6' component="div">
                                    {
                                        res.data ? (res.data.slogan) : ('')
                                    }
                                </Typography>
                            </Grow>
                            <Grow
                                in={res.data ? true : false}
                                style={{ transformOrigin: '0 0 0' }}
                                {...(res.data ? { timeout: 1500 } : {})}
                            >
                                <Box component="div">
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
                            </Grow>
                            <Grow
                                in={res.data ? true : false}
                                style={{ transformOrigin: '0 0 0' }}
                                {...(res.data ? { timeout: 2000 } : {})}
                            >
                                <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" spacing={2} pt={2.5}>
                                    <Button color="primary" variant="contained" startIcon={<SendIcon />} sx={{ borderRadius: 28, minWidth: { xs: '100%', md: '2em' } }}>
                                        My Portfolio
                                    </Button>
                                    <Button color="success" variant="outlined" startIcon={<SendIcon />} sx={{ borderRadius: 28, minWidth: { xs: '100%', md: '2em' } }}>
                                        Download CV
                                    </Button>
                                </Stack>
                            </Grow>
                        </Grid>
                        <Grid xs={12} md={6} sx={{ padding: 0, justifyContent: { xs: 'center', md: 'right' }, display: "flex" }}>
                            <Zoom
                                in={res.data ? true : false}
                            >
                                <Box>
                                    <Logo size={300}
                                        sx={{ width: 300, height: 300, border: '0.25em solid white' }}
                                    />
                                </Box>
                            </Zoom>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    </>)
}