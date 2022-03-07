import { Paper, Typography } from '@mui/material/';
import TeamMain from '../../components/main/Main';
import ListPerson from '../../components/listPerson/ListPerson';

const developersTeam = [
  {
    image: 'https://avatars.githubusercontent.com/u/86246952?v=4',
    name: 'Jamerson Paz',
    office: 'Full-Stack Developer | Product Designer',
    description:
      'Sou Designer de Produto formado pela UFN, com 8 anos de experiência em criação e desenvolvimento de projetos de moveis e produtos para PDV, e Desenvolvedor Full Stack em formação pela Growdev.',
    quote: '"Enquanto a Satisfação for maior que a Frustação estou no caminho certo!" Niches,2022.',
    redeSocial: {
      twitter: 'https://twitter.com/Ljames666Ljames',
      facebook: 'https://www.facebook.com/jamerson.paz/',
      instagram: 'https://www.instagram.com/pazjamerson/',
      linkedin: 'https://www.linkedin.com/in/jamerson-paz/',
      github: 'https://github.com/Ljames666/',
    },
  },
  {
    image: 'https://avatars.githubusercontent.com/u/30914989?v=4',
    name: 'Lucas Zluhan',
    office: 'Full-Stack Developer | Mechanic',
    description:
      'Olá, sou Lucas, trabalho com mecânica automotiva e estudo desenvolvimento web full-stack na Growdev.',
    quote:
      '"Faça como um programador. Quando tudo está errado e confuso, apague tudo e recomece do zero." Orlando Cordeiro.',
    redeSocial: {
      twitter: 'https://twitter.com/',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/lszluhan/',
      linkedin: 'https://www.linkedin.com/in/lszluhan/',
      github: 'https://github.com/lucaszluhan',
    },
  },
  {
    image:
      'https://media-exp1.licdn.com/dms/image/C4D03AQE6ejIKIqpudw/profile-displayphoto-shrink_200_200/0/1627778641687?e=1652313600&v=beta&t=9yUvnlDYKntSfO3Bq7xWjP2TBHRjYUDlxVi2GHvQxfs',
    name: 'Moisés Benites da silva',
    office: 'Studant Full-stack developer in the 5th edition of the starter program at Growdev',
    description:
      'Sou uma pessoa tranquila, curiosa e que trabalha bem em equipe, ajudando sempre que possível os colegas e buscando conhecimento com quem tem mais experiência.',
    quote:
      '"Algo poderoso que aprendi enquanto programador e que devemos aplicar na realidade é: ERRAR RÁPIDO!" Ayrton Yagami.',
    redeSocial: {
      twitter: 'https://twitter.com/',
      facebook: 'https://www.facebook.com/moises.benites.75',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/in/mois%C3%A9s-benites-da-silva-b68358119/',
      github: 'https://github.com/',
    },
  },
];

function DevTeam() {
  return (
    <TeamMain style={{ marginBottom: 20 }}>
      <Paper
        elevation={8}
        sx={{
          margin: 2,
          padding: 2,
          boxShadow:
            ' 0px 5px 5px -3px rgb(67 185 170 / 20%), 0px 8px 10px 1px rgb(67 185 170 / 14%), 0px 3px 14px 2px rgb(67 185 170 / 12%)',
        }}
      >
        <div>
          <h1>Team</h1>
          <Typography>
            Olhar digital não é saber os códigos ou linhas de comando, é saber o que fazer com eles
            para chegar em algum lugar.
          </Typography>
        </div>
        <div style={{ width: '100%', marginTop: 20 }}>
          <Typography sx={{ fontWeight: 'bold' }}>Linguagens e Ferramentas:</Typography>

          <div
            style={{
              padding: 10,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <code>
              <img
                style={{ height: 30 }}
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"
                alt=""
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/npm/npm.png"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/json/json.png"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://seeklogo.com/images/I/insomnia-logo-A35E09EB19-seeklogo.com.png"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://avatars.githubusercontent.com/u/32372333?s=200&v=4"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://avatars.githubusercontent.com/u/34743864?s=200&v=4"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://avatars.githubusercontent.com/u/20165699?s=200&v=4"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://avatars.githubusercontent.com/u/17219288?s=200&v=4"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redis/redis.png"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://avatars.githubusercontent.com/u/33663932?s=200&v=4"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/eslint/eslint.png"
              />
            </code>
            <code>
              <img
                style={{ height: 30 }}
                alt=""
                src="https://avatars.githubusercontent.com/u/32196900?s=200&v=4"
              />
            </code>
          </div>
        </div>
      </Paper>
      <Paper
        elevation={8}
        sx={{
          margin: 2,
          padding: 2,
          boxShadow:
            ' 0px 5px 5px -3px rgb(67 185 170 / 20%), 0px 8px 10px 1px rgb(67 185 170 / 14%), 0px 3px 14px 2px rgb(67 185 170 / 12%)',
        }}
      >
        <ListPerson team={developersTeam} />
      </Paper>
    </TeamMain>
  );
}

export default DevTeam;
