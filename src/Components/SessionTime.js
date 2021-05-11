import {Link} from 'react-router-dom';

export default function SessionTime ({ day, date, sessionTime}){
    return(
        <div className="session-time">
            <p>{day} - {date}</p>
            <div>
                <Link to="/assentos/:idSessao">
                {sessionTime.map((hour,i) => <span>{hour}</span>)}
                </Link>
            </div>
        </div>
    )
}