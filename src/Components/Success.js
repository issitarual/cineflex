import { Link } from 'react-router-dom';

export default function Success () {
    return(
        <>
            <h2 className = "sucess-title">Pedido feito com sucesso!</h2>
            <div className = "button">
            <Link to="/">
                <button>Voltar para Home</button>
            </Link>
            </div>
        </>
    )
}