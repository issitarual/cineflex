import { Link } from "react-router-dom";
export default function Poster ({item}) {
    const { imageURL , movie, id } = item;
    return(
        <Link to="/sessoes/:idFilme">
            <div className = "movie">
                <img src={imageURL} alt="Imagem" title={movie}/>
                <span>{movie}</span>
            </div>
        </Link>
    )
}