import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Logo(props: any) {
    const { size } = props
    const { sx } = props

    return (<>
        <Avatar alt="Low_Scarlet" src={`https://github.com/LowScarlet.png?size=${size}`} sx={sx} />
    </>)
}