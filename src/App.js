import Home from './components/Home';
import Sobre from './components/Sobre';
import Funcionarios from './components/Funcionarios';
import './App.css';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Minha aplicação react</h1>
      <BrowserRouter>
      
       <Nav variant='tabs'>
       <Nav.Link as={Link} to="/"> Página Inicial </Nav.Link>
       <Nav.Link as={Link} to="/funcionarios"> Cadastro de Funcionarios </Nav.Link>
       <Nav.Link as={Link} to="/sobre"> Sobre </Nav.Link>
       </Nav>

        <Routes>
        <Route path="/" index element={<Home/>}> </Route>
        <Route path="/funcionarios" index element={<Funcionarios/>}> </Route>
        <Route path="/sobre" index element={<Sobre/>}> </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
