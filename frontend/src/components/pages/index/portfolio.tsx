/* eslint-disable react/no-unescaped-entities */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import moment from 'moment';
import Chip from '@mui/material/Chip';
import Skeleton from '@mui/material/Skeleton';
import { useState } from 'react';
import useSWR from 'swr'
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';
import GitHubIcon from '@mui/icons-material/GitHub';
import CardActionArea from "@mui/material/CardActionArea";

const MyPortfolioCard = (props: any) => {
    const { id, title, description, date_time, tags, open_source } = props

    return (<>
        <Fade in={true} style={{ height: '100%' }}>
            <CardActionArea
                component="a"
                onClick={() => console.log("CardActionArea clicked")}
            >
                <Card style={{ height: '100%', display: "flex", flexDirection: "column" }}>
                    <CardContent style={{ marginBottom: "auto" }}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <Stack spacing={1} direction="row" >
                                <Chip icon={<GitHubIcon fontSize="inherit" />} size="small" variant="outlined" color={
                                    open_source ? ('success') : ('error')
                                } label={
                                    open_source ? ('Public') : ('Private')
                                } />
                                {
                                    tags ? (
                                        tags.map((d: any) => {
                                            return (<>
                                                <Chip label={d} color="primary" size="small" variant="outlined" />
                                            </>)
                                        })
                                    ) : (<Skeleton width="30%" />)
                                }
                            </Stack>
                        </Typography>
                        <Typography variant="h5" component="div">
                            {title ? (title) : (<Skeleton width="60%" />)}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {date_time ? (moment(parseInt(date_time)).fromNow()) : (<Skeleton width="25%" />)}
                        </Typography>
                        {
                            description ? (
                                description
                            ) : (
                                <Box sx={{ pt: 0.5 }}>
                                    <Skeleton />
                                    <Skeleton width="80%" />
                                </Box>
                            )
                        }
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </CardActionArea>
        </Fade>
    </>)
}

export default function Main() {
    const [res, setRes] = useState<any>({})
    const [loading, setLoading] = useState(true)
    const [totalItem, setTotalItem] = useState(2)

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
    useSWR(`/api/portfolio?item=${totalItem}`, fetcher)

    return (<>
        {!loading ? (<>
            <Grid container spacing={2}>
                {
                    res.data.map((data: any) => {
                        return (<>
                            <Grid xs={12} md={6}>
                                <MyPortfolioCard {...data} />
                            </Grid>
                        </>)
                    })
                }
            </Grid>
            {
                totalItem >= res.item ? (null) : (
                    <Button variant="outlined" size="medium" fullWidth onClick={(e) => {
                        setTotalItem(res.item)
                    }}>
                        Show More..
                    </Button>
                )
            }
        </>
        ) : (
            <Box py={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CircularProgress />
            </Box>
        )}
    </>)
}