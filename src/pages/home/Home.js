import {
  Avatar,
  Box,
  Button,
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
} from '@mui/material/';
import { RiReactjsLine, RiCodeBoxLine, RiHistoryFill } from 'react-icons/ri';

import HomeMain from '../../components/main/Main';

function Home() {
  return (
    <HomeMain>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              display: 'flex',

              justifyContent: 'center',
              alignItems: 'center',

              width: '100%',
              height: 200,
            }}
          >
            <div style={{ width: '35%', height: '90%' }}>
              <Paper
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  padding: 1,

                  boxShadow:
                    ' 0px 5px 5px -3px rgb(67 185 170 / 20%), 0px 8px 10px 1px rgb(67 185 170 / 14%), 0px 3px 14px 2px rgb(67 185 170 / 12%)',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  O que fazer com o Hook userRef?
                </Typography>
                <Typography>
                  Aqui você vai sanar todas suas dúvidas, com o tutorial, sobre esse Hook ou pode
                  ler na documentação oficial do React!
                </Typography>
                <div>
                  <Button
                    variant="contained"
                    sx={{ margin: '0 10px', backgroundColor: '#3CA89A' }}
                    href="/tutorial"
                  >
                    Vamos Lá!
                  </Button>
                  <Button
                    variant="outline"
                    sx={{ margin: '0 10px', color: '#3CA89A', border: '1px solid #3CA89A' }}
                    href="https://pt-br.reactjs.org/docs/hooks-intro.html"
                  >
                    <RiReactjsLine /> React
                  </Button>
                </div>
              </Paper>
            </div>
          </Box>
        </Grid>
        <Grid item xs={6} md={4} sm={12}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemIcon sx={{ fontSize: '3.5rem' }}>
                <RiReactjsLine />
              </ListItemIcon>
              <ListItemText
                primary="Classes Confundem tanto Pessoas quanto Máquinas"
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sophie Alpert
                    </Typography>
                    {
                      ' — Além de deixar o reuso de código e a organização de código mais difícil, nós percebemos que classes podem ser uma grande barreira no aprendizado de React.Por isso, criamos os Hooks que permitem você usar mais das funcionalidades de React sem classes…'
                    }
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemIcon sx={{ fontSize: '3.5rem' }}>
                <RiCodeBoxLine />
              </ListItemIcon>
              <ListItemText
                primary="Componentes Complexos se Tornam Difíceis de Entender"
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Dan Abramov
                    </Typography>
                    {
                      ' — Hooks permitem reutilizar lógica com estado sem mudar sua hierarquia de componentes, permitem que você divida um componente em funções menores baseadas em pedaços que são relacionados …'
                    }
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemIcon sx={{ fontSize: '3.5rem' }}>
                <RiHistoryFill />
              </ListItemIcon>
              <ListItemText
                primary="Sem Quebras de Compatibilidade"
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ryan Florence
                    </Typography>
                    {
                      ' —  Hooks proveem uma API mais direta para os conceitos de React que você já conhece… '
                    }
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
            style={{ width: '45rem', marginTop: '135px' }}
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
          <Paper
            elevation={12}
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              backgroundColor: '#43B9AA',
              margin: 3,
              padding: 3,
              boxShadow:
                ' 0px 5px 5px -3px rgb(67 185 170 / 20%), 0px 8px 10px 1px rgb(67 185 170 / 14%), 0px 3px 14px 2px rgb(67 185 170 / 12%)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#FBFBF2',
                fontWeight: 'bold',
                padding: '0 10px',
              }}
            >
              <div>
                <Typography variant="h6">
                  Bora usar o UseRef!
                  <br /> Lê o Doc, salva, roda e vamos ver o estouro!!
                </Typography>
                <blockquote cite="Bora usar o UseRef, lê o Doc, salva, roda e vamos ver o estouro!!">
                  Marcelo Eltz
                </blockquote>
              </div>

              <div>
                <Avatar
                  alt="Marcelo"
                  src="https://avatars.githubusercontent.com/u/58449658?v=4"
                  sx={{
                    height: '9rem',
                    width: '9rem',
                    marginLeft: '10px',
                    border: '4px solid #FBFBF2',
                  }}
                />
              </div>
            </div>
            <Divider orientation="vertical" sx={{ margin: '0 15px' }} />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                color: '#FBFBF2',
                fontWeight: 'bold',
                padding: '0 10px',
              }}
            >
              <div>
                <Typography variant="h6">Não gosto do Front-end, mas uso hooks!!</Typography>
                <blockquote cite="Não gosto de Front-end, mas uso hooks!!">
                  Paulo Vinicius Cardoso
                </blockquote>
              </div>

              <div>
                <Avatar
                  alt="Paulo"
                  src="https://avatars.githubusercontent.com/u/5923585?v=4"
                  sx={{
                    height: '9rem',
                    width: '9rem',
                    marginLeft: '10px',
                    border: '4px solid #FBFBF2',
                  }}
                />
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </HomeMain>
  );
}

export default Home;
