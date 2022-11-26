/* eslint-disable react/no-unescaped-entities */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import useSWR from 'swr'
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import IconComp from '../../iconcomp/social'

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
            <ListItemText primary={<><IconComp icon={type} /> {nickname}</>} secondary={<><Typography component="span" sx={{ textTransform: 'capitalize' }}>{type}</Typography> - {status}</>} />
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