import { Table } from 'react-bootstrap';
import Navegacao from '../../components/navbar/navbar';
import './listaTitulares.css'


function ListaTodosTitulares() {
    return (
        <>
            <div className='navegacao'>
                <Navegacao/>
            </div>         
                <div className='container-pai'>
                        <div className='container-filho'>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Nome Completo</th>
                                    <th>CPF</th>
                                    <th>Email</th>
                                    <th>Telefone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Priscila Silva</td>
                                    <td>111.222.333.44</td>
                                    <td>priSilva@gmail.com</td>
                                    <td>(21) 91234-5678</td>
                                    </tr>
                                    <tr>
                                    <td>2</td>
                                    <td>Matheus Lemes</td>
                                    <td>222.333.444.55</td>
                                    <td>m.Lemes@hotmail.com</td>
                                    <td>(12) 98888-9999</td>
                                    </tr>
                                    <tr>
                                    <td>3</td>
                                    <td>Mariana Tamay</td>
                                    <td>333.444.555.66</td>
                                    <td>mariTamay@gmail.com</td>
                                    <td>(11) 99999-9999</td>
                                    </tr>
                                    <tr>
                                    <td>4</td>
                                    <td>Monica Camargo</td>
                                    <td>333.444.555.77</td>
                                    <td>camargo1010@gmail.com</td>
                                    <td>(35) 91111-9999</td>
                                    </tr>
                                    <tr>
                                    <td>5</td>
                                    <td>José da Silva</td>
                                    <td>333.444.555.67</td>
                                    <td>j.silva@gmail.com</td>
                                    <td>(15) 92222-9999</td>
                                    </tr>
                                    <tr>
                                    <td>6</td>
                                    <td>João Paulo Coelho</td>
                                    <td>123.444.555.66</td>
                                    <td>coelhoPaulo@gmail.com</td>
                                    <td>(35) 94444-9999</td>
                                    </tr>
                                    <tr>
                                    <td>7</td>
                                    <td>Pedro Tavres</td>
                                    <td>321.432.543.65</td>
                                    <td>pedrinhoTavares@gmail.com</td>
                                    <td>(11) 93333-9999</td>
                                    </tr>
                                    <tr>
                                    <td>8</td>
                                    <td>Carlos da Costa</td>
                                    <td>222.444.666.88</td>
                                    <td>costa2022@gmail.com</td>
                                    <td>(19) 97777-9999</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                </div>
        </>
    )
}

export default ListaTodosTitulares;