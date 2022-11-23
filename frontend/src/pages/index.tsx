/* eslint-disable react/no-unescaped-entities */
import AssignmentIcon from '@mui/icons-material/Assignment';
import GitHubIcon from '@mui/icons-material/GitHub';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SendIcon from '@mui/icons-material/Send';
import TimelineIcon from '@mui/icons-material/Timeline';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import useTheme from '@mui/material/styles/useTheme';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Logo from '../components/brand/logo';
import History from '../components/pages/index/history';
import Portfolio from '../components/pages/index/portfolio';
import Skill from '../components/pages/index/skill';
import SocialAccount from '../components/pages/index/social_account';


const MyCard = () => {
  return (<>
    <Card style={{ height: '100%' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          coming soon
        </Typography>
        <Typography variant="h5" component="div">
        coming soon
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        coming soon
        </Typography>
        <Typography variant="body2">
        coming soon
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </>)
}

function RightBar_MoveOnScroll(props: any) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Box sx={{ position: { xs: 'static', sm: 'sticky' }, top: trigger ? '1em' : '5.5em', transition: 'top 0.2s linear' }}>
      {children}
    </Box>
  );
}

export default function Handler(props: any) {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  
  return (<>
    <Box style={{ backgroundColor: isDark ? '#0a0a0a' : 'white' }}>
      <Container maxWidth={"xl"}>
        <Box py={{ md: 10, xs: 5 }}>
          <Grid container xs={12} md={12} direction={{ md: 'row', xs: 'column-reverse' }}>
            <Grid xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' }, padding: 0, paddingTop: 5, paddingBottom: 5 }}>
              <Typography component="span">
                Hello, my nickname is
              </Typography>
              <Typography fontWeight='700' variant='h4' component="div">
                Low_Scarlet
              </Typography>
              <Typography pt={1.5} variant='h6' component="div">
                I am a full stack website developer from Indonesia.
              </Typography>
              <Box component="div">
                <IconButton aria-label="github-icon" size="large">
                  <GitHubIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="instagram-icon" size="large">
                  <InstagramIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="linkedin-icon" size="large">
                  <LinkedInIcon fontSize="inherit" />
                </IconButton>
              </Box>
              <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" spacing={2} pt={2.5}>
                <Button color="primary" variant="contained" startIcon={<SendIcon />} sx={{ borderRadius: 28, minWidth: { xs: '100%', md: '2em' } }}>
                  About
                </Button>
                <Button color="secondary" variant="contained" startIcon={<SendIcon />} sx={{ borderRadius: 28, minWidth: { xs: '100%', md: '2em' } }}>
                  Download CV
                </Button>
              </Stack>
            </Grid>
            <Grid xs={12} md={6} sx={{ padding: 0, justifyContent: { xs: 'center', md: 'right' }, display: "flex" }}>
              <Logo size={300} 
                sx={{ width: 300, height: 300, border: '0.25em solid white' }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
    <Box>
      <Container maxWidth={"xl"}>
        <Box py={{ md: 5, xs: 2 }}>
          <Grid container spacing={2}>
            <Grid md={12} lg={8}>
              <Grid container>
                <Grid xs={12} md={12}>
                  <Typography fontWeight='700' variant='h5' component="div">
                    <AssignmentIcon /> My Portfolio
                  </Typography>
                  <Portfolio />
                </Grid>
                <Grid container xs={12} lg={12} direction={{ lg: 'row', md: 'row-reverse' }}>
                  <Grid pt={5} xs={12} md={6} lg={12}>
                    <Typography fontWeight='700' variant='h5' component="div">
                      <TimelineIcon /> Skill
                    </Typography>
                    <Skill />
                  </Grid>
                  <Grid pt={5} xs={12} md={6} lg={12}>
                    <Typography fontWeight='700' variant='h5' component="div">
                      <HistoryToggleOffIcon /> History
                    </Typography>
                    <History />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} md={12} lg={4}>
              <RightBar_MoveOnScroll {...props}>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6} lg={12}>
                    <Typography fontWeight='700' variant='h5' component="div">
                      <PeopleAltIcon /> My Social Account
                    </Typography>
                    <SocialAccount />
                  </Grid>

                  <Grid xs={12} sm={6} lg={12}>
                    <Typography fontWeight='700' variant='h5' component="div">
                      <InstagramIcon /> Recent Instagram Posts
                    </Typography>
                    <Grid xs={12}>
                      <MyCard></MyCard>
                    </Grid>
                  </Grid>
                </Grid>
              </RightBar_MoveOnScroll>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  </>);
}