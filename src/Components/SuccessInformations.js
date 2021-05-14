export default function SuccessInformations ({ name, date, hour, seats, buyer }){
    return(
        <div className = "sucess-informations">
            <p className = "sucess-information-title">Filme e sessão</p>
            <p className = "sucess-information">{name}</p>
            <p className = "sucess-information">{date} - {hour}</p>
            <p className = "sucess-information-title">Ingressos</p>
            {seats.map((info, i) => <p key = {i} className="sucess-information">Assento {info}</p>)}
            <p className = "sucess-information-title">Comprador(es)</p>
            {buyer.map((n,i) => <>
            <p className = "sucess-information">Nome: {n.nome}</p>
            <p className = "sucess-information">CPF: {n.cpf}</p></>)}             
        </div>
    )
}