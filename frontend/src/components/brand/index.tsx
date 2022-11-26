import Typography from "@mui/material/Typography";
import Logo from "./logo";

export default function Brand(props: any) {
    const { mobile } = props
    const { avatar } = props

    return (<>
        {
            avatar ? (
                <Logo
                    size={128}
                    sx={{
                        display: { xs: 'none', md: 'flex' }
                    }}
                />
            ) : null
        }
        <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                display: mobile ? ({ xs: 'flex', md: 'none' }) : ({ xs: 'none', md: 'flex' }),
                flexGrow: mobile ? 1 : 0,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                paddingLeft: mobile ? 0 : 2,
            }}
        >
            Low_Scarlet
        </Typography>
    </>)
}