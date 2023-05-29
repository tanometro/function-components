import './App.css';
import FormSignUp from './components/form';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {
  const handleSubmit = (valores) => {
      console.log("app ", valores)
  }
  return (
    <Container
    component="section"
    maxWidth="sm" >
    <Typography
      variant="h3"
      align="center">
      Form registro
      </Typography>
      <FormSignUp handleSubmit={handleSubmit}/>
    </Container>
  );
}

export default App;
