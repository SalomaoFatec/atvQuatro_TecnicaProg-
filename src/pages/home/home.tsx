import './home.css';

function Home (){
    return (
        <> 
            <div className="geral">
                <div className="container_acomodacoes">
                    <div className="box-home">
                        <div className="text">
                            <div>
                                <p className = "texto-acomodacoes">Cadastro</p>
                            </div>
                        </div>
                        <div className="cont">
                            <ul>
                                <button className='botao-link'><a href="./cadastro">Cadastro Titular</a></button>
                                <button className='botao-link'><a href="./cadastroDependente">Cadastro dependente</a></button>
                            </ul>
                        </div>
                    </div>
                    <div className="box-home">
                        <div className="text">
                            <div>
                                <p className = "texto-acomodacoes">Listagens</p>
                            </div>
                        </div>
                        <ul>
                            <button className='botao-link'><a href="./todosTitulares">Clientes Titulares</a></button>
                            <button className='botao-link'><a href="./todosDependentes">Clientes Dependentes</a></button>
                        </ul>
                    </div>
                    <div className="box-home">
                        <div className="text">
                            <div>
                                <p className = "texto-acomodacoes">Acomodações</p>
                            </div>
                        </div>
                        <ul>
                        <button className='botao-link'><a href="./acomodacoes">Resever acomodação</a></button>
                        </ul>
                    </div>              
                </div>
            </div>
        </>
)
}

export default Home;