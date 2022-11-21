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
import LinearProgress from '@mui/material/LinearProgress';

const MySkillCard = (props: any) => {
    const { id, title, description, grade, tags } = props

    return (<>
        <Fade in={true}>
            <Card style={{ height: '100%' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <Stack spacing={1} direction="row" >
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
                        {grade ? (<LinearProgress variant="determinate" value={grade} />) : (<Skeleton width="25%" />)}
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
            </Card>
        </Fade>
    </>)
}

export default function Main() {
    const [res, setRes] = useState<any>({})
    const [loading, setLoading] = useState(true)
    const [totalItem, setTotalItem] = useState(3)

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
    useSWR(`/api/skill?item=${totalItem}`, fetcher)

    return (<>
        {!loading ? (<>
            <Grid container spacing={2}>
                {
                    res.data.map((data: any) => {
                        return (<>
                            <Grid md={12} xs={12} lg={4}>
                                <MySkillCard {...data} />
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