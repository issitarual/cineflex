import { Link } from 'react-router-dom';
import Top from './Top';
import SuccessInformations from './SuccessInformations'

export default function Success ({ information, setIdSessao, setInformation, setIdFilme }) {
    const {movie, buyer, seats} = information;
    const {name, hour, date} = movie;

    return(
        <>
            <Top back = {true}></Top>
            <h2 className = "sucess-title">Pedido feito com sucesso!</h2>
            <SuccessInformations name = {name} date = {date} hour = {hour} seats = {seats} buyer = {buyer}></SuccessInformations>
            <div className = "button">
            <Link to="/">
                <button onClick={() => {setIdSessao(""); setIdFilme(""); setInformation({});}}>Voltar para Home</button>
            </Link>
            </div>
        </>
    )
}