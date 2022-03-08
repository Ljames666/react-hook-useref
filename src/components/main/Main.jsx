import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const StyledMain = styled(Box)(({ theme }) => ({
  width: '100%',
}));

export default function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}
