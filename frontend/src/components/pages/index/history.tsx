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
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import JavascriptIcon from '@mui/icons-material/Javascript';
import WebIcon from '@mui/icons-material/Web';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

const IconComp = (props: any) => {
    const {icon} = props
    if (icon === 'LocalLibrary') return (<LocalLibraryIcon/>)
    if (icon === 'DataObject') return (<DataObjectIcon/>)
    if (icon === 'DesignServices') return (<DesignServicesIcon/>)
    if (icon === 'Javascript') return (<JavascriptIcon/>)
    if (icon === 'Web') return (<WebIcon/>)
    if (icon === 'DeveloperMode') return (<DeveloperModeIcon/>)
    return (<></>)
}

const MyHistoryTimeline = (props: any) => {
    const { id, title, description, year, icon, icon_color } = props

    return (<>
        <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="text.secondary" >
                {year}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color={icon_color} variant="outlined">
                    <IconComp icon={icon} />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span" fontSize={{ xs: 15, md: 21 }}>
                    {title}
                </Typography>
                <Typography fontSize={{ xs: 10, md: 15 }}>
                    {description}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    </>)
}

export default function Main() {
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
    useSWR('/api/history', fetcher)

    return (<>
        {!loading ? (<>
            <Timeline position="alternate">
                {
                    res.data.map((data: any) => {
                        return (<>
                            <MyHistoryTimeline {...data} />
                        </>)
                    })
                }
            </Timeline>
        </>
        ) : (
            <Box py={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CircularProgress />
            </Box>
        )}
    </>)
}