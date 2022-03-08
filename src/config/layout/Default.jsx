import { Divider } from '@mui/material';
import { StyledContainer, StyledMainBox } from './StyledDefault';
import NavBar from '../../components/navBar/NavBar';
import MyFooter from '../../components/footer/Footer';

function DefaultLayout({ children }) {
  return (
    <StyledContainer>
      <NavBar />
      <Divider sx={{ marginTop: '0.4rem' }} />
      <StyledMainBox>{children}</StyledMainBox>
      <Divider sx={{ marginBottom: '0.4rem' }} />
      <MyFooter />
    </StyledContainer>
  );
}

export default DefaultLayout;
