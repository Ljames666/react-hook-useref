import {
  Avatar,
  Box,
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
} from '@mui/material/';

import HomeMain from '../../components/main/Main';

function Home() {
  return (
    <HomeMain>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              display: 'flex',
              '& > :not(style)': {
                m: 1,
                width: 128,
                height: 128,
              },
            }}
          >
            <Paper variant="outlined" />
          </Box>
        </Grid>
        <Grid item xs={6} md={4} sm={12}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemIcon>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemIcon>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemIcon>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </>
                }
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6} sm={6}>
          <img
            src="https://storage.googleapis.com/blog-images-backup/1*HpWEeuuijusQkO9mT5ohXw.gif"
            alt="hook"
            style={{ height: '17rem' }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: '100%',
              height: 300,
            },
          }}
        >
          <Paper elevation={12} square sx={{ backgroundColor: '#43B9AA' }}>
            <Typography> Bora usar o UseRef, lê o Doc salva e roda, pra ver o esturo!!</Typography>
            <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/58449658?v=4" />
          </Paper>
        </Grid>
      </Grid>
    </HomeMain>
  );
}

export default Home;
