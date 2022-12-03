import { Table } from 'react-bootstrap';
import Navegacao from '../../components/navbar/navbar';
import './listaDependentes.css'


function ListaTodosDependentes() {
    return (
        <>
            <div className='navegacao'>
                <Navegacao/>
            </div>         
                <div className='container-pai'>
                    <div className='container-filho-esquerda'></div>
                        <div className='container-filho'>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Nome Completo</th>
                                    <th>Documento</th>
                                    <th>Cliente Titular</th>
                                    <th>Telefone Titular</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Maria Clara Tamay</td>
                                    <td>44.234.123.52</td>
                                    <td>Mariana Tamay</td>
                                    <td>(11) 99999-9999</td>
                                    </tr>
                                    <tr>
                                    <td>2</td>
                                    <td>Pedro Henrique Lemes</td>
                                    <td>111.999.222.33</td>
                                    <td>Matheus Lemes</td>
                                    <td>(12) 98888-9999</td>
                                    </tr>
                                    <tr>
                                    <td>3</td>
                                    <td>João Pedro Camargo</td>
                                    <td>555.444.555.66</td>
                                    <td>Monica Camargo</td>
                                    <td>(35) 91111-9999</td>
                                    </tr>
                                    <tr>
                                    <td>4</td>
                                    <td>Maria da Silva</td>
                                    <td>323.445.556.77</td>
                                    <td>José da Silva</td>
                                    <td>(15) 92222-9999</td>
                                    </tr>
                                    <tr>
                                    <td>5</td>
                                    <td>Natália Lira Coelho</td>
                                    <td>333.888.555.67</td>
                                    <td>João Paulo Coelho</td>
                                    <td>(35) 94444-9999</td>
                                    </tr>
                                    <tr>
                                    <td>6</td>
                                    <td>Laura B. Tavares</td>
                                    <td>123.444.555.10</td>
                                    <td>Pedro Tavares</td>
                                    <td>(11) 93333-9999</td>
                                    </tr>
                                    <tr>
                                    <td>7</td>
                                    <td>Lucas F. Costa</td>
                                    <td>321.432.543.88</td>
                                    <td>Carlos da Costa</td>
                                    <td>(12) 98888-9999</td>
                                    </tr>
                                    <tr>
                                    <td>8</td>
                                    <td>Noah Silva</td>
                                    <td>222.444.777.89</td>
                                    <td>Priscila Silva</td>
                                    <td>(21) 91234-5678</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                </div>
        </>
    )
}

export default ListaTodosDependentes;