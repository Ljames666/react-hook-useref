import { useState } from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import { RiReactjsLine } from 'react-icons/ri';
import { GiMeatHook } from 'react-icons/gi';

function NavBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
      <div
        style={{
          fontSize: '1rem',
        }}
      >
        <Link
          sx={{ color: '#8F938A', fontWeight: 'bold', textTransform: 'uppercase', marginRight: 5 }}
          href="/home"
          underline="hover"
        >
          HOME
        </Link>
        <Link
          sx={{ color: '#8F938A', fontWeight: 'bold', textTransform: 'uppercase', marginRight: 5 }}
          href="/team"
          underline="hover"
        >
          team
        </Link>
        <Link
          sx={{ color: '#8F938A', fontWeight: 'bold', textTransform: 'uppercase', marginRight: 5 }}
          href="/tutorial"
          underline="hover"
        >
          Tutorial
        </Link>
        <Link
          sx={{ color: '#8F938A', fontWeight: 'bold', textTransform: 'uppercase', marginRight: 5 }}
          href="/references"
          underline="hover"
        >
          References
        </Link>
      </div>
      <div
        style={{
          width: '18%',
          display: 'flex',
          justifyContent: 'right',
          alignItems: 'center',
        }}
      >
        <Button variant="outlined" href="/contact" color="success">
          CONTACTS US
        </Button>
      </div>
    </Box>
  );
}

export default NavBar;
