
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import imageToAdd from "../../assets/images/logo_atlantis.png";
import Navegacao from '../../components/navbar/navbar';
import {BsPlusCircleFill} from 'react-icons/bs';

import './cadastro_dependente.css';


function showDiv(element: any) {
    var div = document.getElementById("hidden_div");
    // eslint-disable-next-line eqeqeq
    if (element.target.value == 1) {
        div!.style.display = 'block'
    }
    else div!.style.display = 'none';

    var div2 = document.getElementById("hidden_div2");
    if (element.target.value == 2) {
        div2!.style.display = 'block'
    }
    else div2!.style.display = 'none';
}

function CadastroDependente() {

const button = document.getElementById('btn');
const hiddenDiv = document.getElementById('hidden_div3');

let elementClicked = false;

button?.addEventListener('click', (event) => {


  if (elementClicked) {
    hiddenDiv!.style.display = 'block';
    console.log('clicked');
  }

  elementClicked = true;
});

    return (
        <>

            <div className='navegacao-dep'>
                <Navegacao />
            </div>

            <div className="container-dep" >
                <div className="cadastro-form">
                <img className='logo' src={imageToAdd} alt="Image" />
                        <h3 className='texto-cadastro'>Cadastro de dependente</h3>
                    <Form >
                        <div className='teste'>
                            <Form.Group className="mb-1" controlId="formBasicEmail">
                                <Form.Label className='cadastro-label'>Nome completo</Form.Label>
                                <Form.Control type="text" placeholder="digite nome completo" />
                            </Form.Group>
                            <Form.Label className = 'cadastro-label'>Selecione documento para ser cadastrado</Form.Label>
                            <Form.Select className='cadastro-label' id="test" name="form_select" onChange={(event) => showDiv(event)}>
                                <option value="0">Selecione</option>
                                <option value="1">RG</option>
                                <option value="2">CPF</option>
                            </Form.Select>
                            <div id="hidden_div">
                                <Form.Group className="mb-1" controlId="formBasicPassword">
                                    <Form.Label className='cadastro-label'>RG</Form.Label>
                                    <Form.Control type="text" placeholder="digite o RG" />
                                </Form.Group>
                            </div>
                            <div id="hidden_div2">
                                <Form.Group className="mb-1" controlId="formBasicPassword">
                                    <Form.Label className='cadastro-label'>CPF</Form.Label>
                                    <Form.Control type="text" placeholder="digite o CPF" />
                                </Form.Group>
                            </div>
                        </div>
                        <div className='botao-centro'>
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

export default CadastroDependente;