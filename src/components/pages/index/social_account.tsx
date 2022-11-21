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
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const IconComp = (props: any) => {
    const { icon } = props
    if (icon === 'instagram') return (<InstagramIcon />)
    if (icon === 'discord') return (<VideogameAssetIcon />)
    if (icon === 'linkedin') return (<LinkedInIcon />)
    return (<></>)
}

const MySocial_AccountCard = (props: any) => {
    const { id, nickname, status, type, avatar } = props

    return (<>
        <ListItemButton
            onClick={(e) => (console.log('gg'))}
        >
            <ListItemAvatar>
                <Avatar
                    alt="Low_Scarlet"
                    src={avatar}
                />
            </ListItemAvatar>
            <ListItemText primary={<><IconComp icon={type} /> {nickname}</>} secondary={status} />
        </ListItemButton>
        <Divider variant="fullWidth" component="li" />
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
    useSWR('/api/social_account', fetcher)

    return (<>
        {!loading ? (<>
            <List sx={{ width: '100%', bgcolor: 'background.paper', }}>
                {
                    res.data.map((data: any) => {
                        return (<>
                            <MySocial_AccountCard {...data} />
                        </>)
                    })
                }
            </List>
        </>
        ) : (
            <Box py={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CircularProgress />
            </Box>
        )}
    </>)
}