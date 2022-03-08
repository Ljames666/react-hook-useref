import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
  Typography,
} from '@mui/material/';
import IconButton from '@mui/material/IconButton';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import LinkIcon from '@mui/icons-material/Link';

export default function TopCard({ references }) {
  return (
    <>
      {references.map((reference) => {
        return (
          <Card
            sx={{
              margin: 1,
              height: '450px',
              width: '300px',
              color: '#FBFBF2',
              backgroundColor: '#080D08',
            }}
          >
            <CardHeader
              sx={{
                '.css-83ijpv-MuiTypography-root': { color: '#8F938A' },
                '.css-et1ao3-MuiTypography-root': { fontWeight: 'bold' },
              }}
              avatar={<Avatar alt={reference.name} src={reference.avatar} />}
              title={reference.title}
              subheader={reference.name}
            />

            <CardMedia component="img" height="140" image={reference.image} alt={reference.name} />
            <Divider />
            <CardContent sx={{ backgroundColor: '#3CA89A' }}>
              <Typography>{reference.details}</Typography>
            </CardContent>
            <Divider />
            <CardActions sx={{ paddingBottom: '50px' }}>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon sx={{ color: '#FBFBF2', fontWeight: 'bold' }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon sx={{ color: '#FBFBF2', fontWeight: 'bold' }} />
              </IconButton>
              <IconButton aria-label="link" href={reference.site}>
                <LinkIcon sx={{ color: '#FBFBF2', fontWeight: 'bold' }} />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}
