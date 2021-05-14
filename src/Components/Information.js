export default function Information ({ state, name, cpf, setName, setCPF }){
    return(
    <div className = "information">
        {state.map((n,i) =>(<>
        <p key = {i}><strong>Assento {n.name}</strong></p>
        <p>Nome do comprador:</p>
        <input placeholder = {"Digite seu nome..."} value = {name.find(n => n.id === name.idAssento? name.nome: null)} onChange={e => name.filter(n => n.id !== name.idAssento)? setName([...name.filter(f => f.idAssento !== n.id), {idAssento: n.id, nome: e.target.value}]):null}></input>
        <p>CPF do comprador:</p>
        <input placeholder = {"Digite seu CPF..."} value = {cpf.find(n => n.id === cpf.idAssento? cpf.number: null)} onChange={e => cpf.filter(n => n.id !== cpf.idAssento)? setCPF([...cpf.filter(f => f.idAssento !== n.id), {idAssento: n.id, number: e.target.value}]):null}></input></>))}
    </div>
    )
}