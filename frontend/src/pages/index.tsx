/* eslint-disable react/no-unescaped-entities */
import AssignmentIcon from '@mui/icons-material/Assignment';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import InstagramIcon from '@mui/icons-material/Instagram';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TimelineIcon from '@mui/icons-material/Timeline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import useTheme from '@mui/material/styles/useTheme';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Heroes from '../components/pages/index/heroes';
import History from '../components/pages/index/history';
import Portfolio from '../components/pages/index/portfolio';
import Skill from '../components/pages/index/skill';
import SocialAccount from '../components/pages/index/social_account';
import MyAppBar from '../components/layout/appbar'
import MyFootBar from '../components/layout/footer'

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
    <MyAppBar {...{ isDark }} />

    <Heroes {...{ isDark }} />
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
                  <Typography fontWeight='500' component="p">
                    All current and completed projects I am working on.
                  </Typography>
                  <Portfolio />
                </Grid>
                <Grid container xs={12} lg={12} direction={{ lg: 'row', md: 'row-reverse' }}>
                  <Grid pt={5} xs={12} md={6} lg={12}>
                    <Typography fontWeight='700' variant='h5' component="div">
                      <TimelineIcon /> Skill
                    </Typography>
                    <Typography fontWeight='500' component="p">
                      My current skills and experience.
                    </Typography>
                    <Skill />
                  </Grid>
                  <Grid pt={5} xs={12} md={6} lg={12}>
                    <Typography fontWeight='700' variant='h5' component="div">
                      <HistoryToggleOffIcon /> History
                    </Typography>
                    <Typography fontWeight='500' component="p">
                      My experience history.
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
                    <Typography fontWeight='500' component="p">
                      Contact me with my social account on the internet.
                    </Typography>
                    <SocialAccount />
                  </Grid>

                  <Grid xs={12} sm={6} lg={12}>
                    <Typography fontWeight='700' variant='h5' component="div">
                      <InstagramIcon /> Recent Instagram Posts
                    </Typography>
                    <Typography fontWeight='500' component="p">
                      My latest post on Instagram.
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
    <MyFootBar/>
  </>);
}