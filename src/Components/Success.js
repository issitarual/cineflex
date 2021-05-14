import { Link } from 'react-router-dom';
import Top from './Top'

export default function Success ({ information, setIdSessao, setInformation, setIdFilme }) {
    const {movie, buyer, seats} = information;
    const {name, hour, date} = movie;

    return(
        <>
            <Top back = {true}></Top>
            <h2 className = "sucess-title">Pedido feito com sucesso!</h2>
            <div className = "sucess-informations">
                <p className = "sucess-information-title">Filme e sessão</p>
                <p className = "sucess-information">{name}</p>
                <p className = "sucess-information">{date} - {hour}</p>
                <p className = "sucess-information-title">Ingressos</p>
                {seats.map((info, i) => <p key = {i} className="sucess-information">Assento {info}</p>)}
                <p className = "sucess-information-title">Comprador(es)</p>
                {buyer.map((n,i) => <>
                <p className = "sucess-information"><strong>- Pessoa {i+1}</strong></p>
                <p className = "sucess-information">Nome: {n.nome}</p>
                <p className = "sucess-information">CPF: {n.cpf}</p></>)}
                
            </div>
            <div className = "button">
            <Link to="/">
                <button onClick={() => {setIdSessao(""); setIdFilme(""); setInformation({});}}>Voltar para Home</button>
            </Link>
            </div>
        </>
    )
}