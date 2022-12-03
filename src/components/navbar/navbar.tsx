import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navegacao() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Atlantis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="acomodacoes">Acomodações</Nav.Link>
            <NavDropdown title="Clientes" id="basic-nav-dropdown">
              <NavDropdown.Item href="todosTitulares">Titulares</NavDropdown.Item>
              <NavDropdown.Item href="todosDependentes">
                Dependentes
              </NavDropdown.Item>
              <NavDropdown.Item href="cadastro">Cadastro</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacao;