import Typography from "@mui/material/Typography";
import Logo from "./logo";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export default function Brand(props: any) {
    const { mobile } = props
    const { avatar } = props

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
                    Low_Scarlet
                </Typography>
                <Typography
                    variant="caption"
                    component="a"
                    href="/"
                    sx={{
                        fontWeight: 200,
                        letterSpacing: '.5rem',
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