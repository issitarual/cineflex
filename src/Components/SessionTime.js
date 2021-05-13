import React from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function SessionTime ({ weekday, date, showtimes, setIdSessao }){
    const { idSessao } = useParams();

    return(
        <div className="session-time">
            <p>{weekday} - {date}</p>
            <div>
                {showtimes.map((hour,i) =><Link key = {i} to={`/assentos/${hour.id}`}> <span key = {i} onClick={() => setIdSessao(hour.id)}>{hour.name}</span> </Link>)}
            </div>
        </div>
    )
}