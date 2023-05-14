import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Page404 from "./pages/Page404"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sobre" element={<Sobre/>}/>
      <Route path="*" element={<Page404/>}/> {/*Ruta comodin para cuando no existe el path*/}
    </Routes>
  </Router>
  );
}

export default App;