/* eslint-disable jsx-a11y/img-redundant-alt */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import Logotipo from '../components/logotype/logo';
import './login.css';
import imageToAdd from "../../assets/images/logo_atlantis.png";


function Login() {
  return (
    <>
      <div  className="login">
        <Form className="teste-form">
          <img className='logo' src={imageToAdd} alt="Image" />
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label className="login-label">Usuário</Form.Label>
            <Form.Control type="email" placeholder="digite seu email" />
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Label className="login-label">Senha</Form.Label>
            <Form.Control type="password" placeholder="digite sua senha" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicCheckbox">
          </Form.Group>
          <Button  className="botao-login" variant="primary">
          <a href="home">Entrar</a>
          </Button>
        </Form>
      </div>
    </>

  );
}

export default Login;