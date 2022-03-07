import { Box, Typography, Link } from '@mui/material';
import { RiReactjsLine } from 'react-icons/ri';
import { GiMeatHook } from 'react-icons/gi';

function Footer() {
  return (
    <Box
      sx={{
        height: '7%',
        width: '100%',
        color: '#8F938A',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '25%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <RiReactjsLine
          style={{
            color: '#3CA89A',
            fontSize: '3rem',
          }}
        />
        <Typography sx={{ color: '#8F938A', fontSize: '1.5rem' }}>React_Hook_UseRef</Typography>
        <GiMeatHook
          style={{
            color: '#3CA89A',
            fontSize: '2rem',
          }}
        />
      </div>
      <Typography sx={{ color: '#8F938A', fontSize: '0.9rem', fontWeight: 'bold' }}>
        Website developed for the presentation of the work, React Hook UseRef, in the Program Start
        5 Ed. 2022
      </Typography>
      <Link href="https://www.growdev.com.br/">
        <img
          src="https://www.growdev.com.br/assets/images/logo-dark.png"
          alt="growdev"
          style={{ height: '3rem' }}
        />
      </Link>
    </Box>
  );
}

export default Footer;
