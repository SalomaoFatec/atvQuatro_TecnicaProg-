/* eslint-disable jsx-a11y/img-redundant-alt */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './cadastroTitular.css';
import imageToAdd from "../../assets/images/logo_atlantis.png";
import Navegacao from '../../components/navbar/navbar';

function CadastroClienteTitular() {
    return (
        <>
            <div className='navegation'>
                <Navegacao />
            </div>
            <div className="container-titular">
                <div  className="cadastro-form">
                    <img className='logo' src={imageToAdd} alt="Image" />
                        <h3 className='texto-cadastro'>Cadastro de novo cliente titular</h3>
                    <Form>
                        <div className = 'teste'>
                            <Form.Group className="mb-1" controlId="formBasicEmail">
                                <Form.Label className = 'cadastro-label'>Nome completo</Form.Label>
                                <Form.Control type="text" placeholder="digite nome completo" />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="formBasicPassword">
                                <Form.Label className = 'cadastro-label'>Nome social</Form.Label>
                                <Form.Control type="text" placeholder="digite nome social" />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="formBasicPassword">
                                <Form.Label className = 'cadastro-label'>Data de nascimento</Form.Label>
                                <Form.Control type="date"/>
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="formBasicPassword">
                                <Form.Label className = 'cadastro-label'>RG</Form.Label>
                                <Form.Control type="text" placeholder="digite o RG" />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="formBasicPassword">
                                <Form.Label className = 'cadastro-label'>Telefone</Form.Label>
                                <Form.Control type="text" placeholder="xxx xxxx-xxxx" />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="formBasicPassword">
                                <Form.Label className = 'cadastro-label'>CPF</Form.Label>
                                <Form.Control type="text" placeholder="digite o CPF" />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="formBasicPassword">
                                <Form.Label className = 'cadastro-label'>Passaporte</Form.Label>
                                <Form.Control type="text" placeholder="digite o passaporte" />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="formBasicPassword">
                                <Form.Label className = 'cadastro-label'>Endereço</Form.Label>
                                <Form.Control type="text" placeholder="digite o endereço" />
                            </Form.Group>
                            <a className='texto-dep' href = "cadastroDependente">Cadastre um dependente</a>
                        </div>
                        <div  className='botoes'>
                            <div>
                                <Button className ='botao-cadastro' variant="primary" type="submit">
                                <a href="home">Voltar</a>
                                </Button>
                                <Button className ='botao-cadastro' variant="primary">
                                    Cadastrar
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default CadastroClienteTitular;