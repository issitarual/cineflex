export default function Seat ({ setState, state, seats }){
    return(
        <div className="seats">
            {seats.map((seat ,i ) => 
            <div 
            key = {i} 
            onClick={() => seat.isAvailable? (state.find(n => n.id === seat.id)? ((setState(state.filter(n => n.id !== seat.id)))): setState([...state, {id: seat.id, name: seat.name}])) : alert("Esse assento não está disponível")} 
            className = {seat.isAvailable? (state.find(n => n.id === seat.id) ? "seat selected": "seat available"): "seat unavailable"}
            >
                {seat.name}
            </div>)}
        </div>
    )
}