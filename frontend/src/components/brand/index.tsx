import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';

export default function Brand(props: any) {
    return (<>
        <Stack direction="row" py={1}>
            <Stack direction="column">
                <Typography
                    variant="h6"
                    component="a"
                    href="/"
                    sx={{
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    LowScarlet
                </Typography>
                <Typography
                    variant="caption"
                    component="a"
                    sx={{
                        fontWeight: 200,
                        letterSpacing: {lg: '.5rem', sm: '.3rem', xs: '.5rem'},
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Website Developer
                </Typography>
            </Stack>
        </Stack>
    </>)
}