import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';


export default function Poster ({posterURL,title,id, setIdFilme}) {
    const { idFilme } = useParams();
    return(
        <Link to={`/sessoes/${id}`} >
            <div onClick={() => (setIdFilme(id))} className = "movie">
                <img src={posterURL} alt="Imagem" title={title}/>
                <span >{title}</span>
            </div>
        </Link>
    )
}