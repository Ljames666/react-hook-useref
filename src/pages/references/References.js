import { Paper } from '@mui/material/';
import ReferencesMain from '../../components/main/Main';
import Card from '../../components/topCard/TopCard';
import MyReferences from '../../store/ReferencesData';

export default function ThisReferences() {
  return (
    <ReferencesMain>
      <h1 style={{ fontWeight: 'bold', margin: '10px 0' }}>Nossas referências</h1>
      <Paper
        elevation={8}
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: 2,
          padding: 2,
          boxShadow:
            ' 0px 5px 5px -3px rgb(67 185 170 / 20%), 0px 8px 10px 1px rgb(67 185 170 / 14%), 0px 3px 14px 2px rgb(67 185 170 / 12%)',
        }}
      >
        <Card references={MyReferences} />
      </Paper>
    </ReferencesMain>
  );
}
