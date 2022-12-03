import ModalAcomodacao from "../../components/modal/modal_acomodacao";
import Navegacao from "../../components/navbar/navbar";
import './acomodacoes.css';

function Acomodacoes (){
    return (
        <> 
            <div><Navegacao/></div>
            <div className="geral">
                <div className="container_acomodacoes">
                    <div className="box">
                        <div className="text">
                            <div>
                                <p className = "texto-acomodacoes">Solteiro Simples</p>
                            </div>
                        </div>
                        <div className="cont">
                            <ul>
                                <li>1 - Cama de solteiro</li>
                                <li>1 - Suíte</li>
                                <li>Climatização</li>
                            </ul>
                        </div>
                        <div className="text">
                            <div><ModalAcomodacao/></div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="text">
                            <div>
                                <p className = "texto-acomodacoes">Solteiro Mais</p>
                            </div>
                        </div>
                        <ul>
                            <li>1 - Cama de casal</li>
                            <li>1 - Suíte</li>
                            <li>1 - Garagem</li>
                            <li>Climatização</li>
                        </ul>
                        <div className="text">
                            <div><ModalAcomodacao/></div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="text">
                            <div>
                                <p className = "texto-acomodacoes">Casal Simples</p>
                            </div>
                        </div>
                        <ul>
                            <li>1 - Cama de casal</li>
                            <li>1 - Suíte</li>
                            <li>1 - Garagem</li>
                            <li>Climatização</li>
                        </ul>
                        <div className="text">
                            <div><ModalAcomodacao/></div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="text">
                            <div>
                                <p className = "texto-acomodacoes">Família Simples</p>
                            </div>
                        </div>
                        <ul>
                            <li>1 - Cama de casal</li>
                            <li>2 - Cama(s) de solteiro</li>
                            <li>1 - Suíte</li>
                            <li>1 - Garagem</li>
                            <li>Climatização</li>
                        </ul>
                        <div className="text">
                            <div><ModalAcomodacao/></div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="text">
                            <div>
                                <p className = "texto-acomodacoes">Família Mais</p>
                            </div>
                        </div>
                        <ul>
                            <li>1 - Cama de casal</li>
                            <li>1 - Suíte</li>
                            <li>1 - Garagem</li>
                            <li>Climatização</li>
                        </ul>
                        <div className="text">
                            <div><ModalAcomodacao/></div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="text">
                            <div>
                                <p className = "texto-acomodacoes">Família Super</p>
                            </div>
                        </div>
                        <div className="cont">
                            <ul>
                                <li>1 - Cama de casal</li>
                                <li>6 - Cama(s) de solteiro</li>
                                <li>1 - Suíte</li>
                                <li>2 - Garagem(s)</li>
                                <li>Climatização</li>
                            </ul>
                        </div>
                        <div className="text">
                            <div><ModalAcomodacao/></div>
                        </div>
                    </div>
                
                </div>


            </div>




        </>
)
}

export default Acomodacoes;