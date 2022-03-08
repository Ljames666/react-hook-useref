import { styled } from '@mui/material/styles';
import { Container, Box } from '@mui/material';

const StyledContainer = styled(Container)(({ theme }) => ({
  height: '100vh',
  width: '100vw',
}));

const StyledMainBox = styled(Box)(({ theme }) => ({
  height: '82.5%',
  width: '100%',
  overflowY: 'scroll',
}));

export { StyledContainer, StyledMainBox };
