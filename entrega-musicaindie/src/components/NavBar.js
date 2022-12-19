import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function ColorSchemesExample() {
  return (
    <div>
      <header>
        <h1 className='miTitulo'>
          Musica Indie
        </h1>
        <>
      <Navbar bg="dark" variant="dark" className="miNav">
        <Container>
          <Navbar.Brand href="#home">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Productos</Nav.Link>
            <Nav.Link href="#features">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
      </header>
    </div>
  );
}

export default ColorSchemesExample;