import Navegacao from "../../components/navbar/navbar";
import './acomodacoes.css';

function Acomodacoes (){
    return (
        <> 
            <Navegacao/>
            <div className="geral">
                <div className="container_acomodacoes">
                    <div className="testezin">
                        <p className = "texto-acomodacoes">Solteiro Simples</p>
                        <ul>
                            <li>1 - Cama de solteiro</li>
                            <li>1 - Suíte</li>
                            <li>Climatização</li>
                        </ul>
                    </div>
                    <div className="testezin">
                        <p className = "texto-acomodacoes">Solteiro Mais</p>
                        <ul>
                            <li>1 - Cama de casal</li>
                            <li>1 - Suíte</li>
                            <li>1 - Garagem</li>
                            <li>Climatização</li>
                        </ul>
                    </div>
                    <div className="testezin">
                        <p className = "texto-acomodacoes">Casal Simples</p>
                        <ul>
                            <li>1 - Cama de casal</li>
                            <li>1 - Suíte</li>
                            <li>1 - Garagem</li>
                            <li>Climatização</li>
                        </ul>
                    </div>
                    <div className="testezin">
                        <p className = "texto-acomodacoes">Família Simples</p>
                        <ul>
                            <li>1 - Cama de casal</li>
                            <li>2 - Cama(s) de solteiro</li>
                            <li>1 - Suíte</li>
                            <li>1 - Garagem</li>
                            <li>Climatização</li>
                        </ul>
                    </div>
                    <div className="testezin">
                        <p className = "texto-acomodacoes">Família Mais</p>
                        <ul>
                            <li>1 - Cama de casal</li>
                            <li>1 - Suíte</li>
                            <li>1 - Garagem</li>
                            <li>Climatização</li>
                        </ul>
                    </div>
                    <div className="testezin">
                        <p className = "texto-acomodacoes">Família Super</p>
                        <ul>
                            <li>1 - Cama de casal</li>
                            <li>6 - Cama(s) de solteiro</li>
                            <li>1 - Suíte</li>
                            <li>2 - Garagem(s)</li>
                            <li>Climatização</li>
                        </ul>
                    </div>
                
                </div>
            </div>




        </>
)
}

export default Acomodacoes;