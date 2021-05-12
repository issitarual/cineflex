import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function SessionTime ({ id, weekday, date, showtimes, setId }){
    const { idSessao } = useParams();

    return(
        <div className="session-time">
            <p>{weekday} - {date}</p>
            <div>
                <Link to={`/assentos/${id}`}>
                {showtimes.map((hour,i) => <span key = {i} onClick={() => setId(id)}>{hour.name}</span>)}
                </Link>
            </div>
        </div>
    )
}