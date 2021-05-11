import SessionTime from './SessionTime';

export default function Sessions (props) {
    const sessions = [
        {
            day: "Quarta-feira",
            date: "24/06/2021",
            sessionTime: ["15:00", "17:00"]
        },
        {
            day: "Sexta-feira",
            date: "26/06/2021",
            sessionTime: ["15:00", "19:00"]
        }
    ]
    const information = 
        {
            movie: "movie 6",
            id: 6,
            imageURL: "https://m.media-amazon.com/images/I/51ctaU9AgCL.jpg"
        }

    return (
        <>
            <h2>Selecione o horário</h2>
            {sessions.map((item,i) => <SessionTime day = {item.day} date = {item.date} sessionTime = {item.sessionTime}/>)}
            <div className="bottom-session-time">
                <img src={information.imageURL}></img>
                <p>{information.movie}</p>
            </div>
        </>
    )
}