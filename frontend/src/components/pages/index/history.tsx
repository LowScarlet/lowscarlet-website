/* eslint-disable react/no-unescaped-entities */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import useSWR from 'swr'
import CircularProgress from '@mui/material/CircularProgress';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import IconComp from '../../iconcomp/other'

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