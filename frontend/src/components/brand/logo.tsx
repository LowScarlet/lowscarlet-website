import Avatar from "@mui/material/Avatar";
import Skeleton from '@mui/material/Skeleton';

export default function Logo(props: any) {
    const { size, sx, loading } = props

    return (<>
        {
            loading ? (
                <Skeleton animation="wave" variant="circular" sx={sx} />
            ) : (
                <Avatar alt="Low_Scarlet" src={`https://github.com/LowScarlet.png?size=${size}`} sx={sx} />
            )
        }
    </>)
}