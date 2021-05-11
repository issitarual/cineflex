import Poster from './Poster';

export default function Home ({information}) {
    return (
        <>
            <h2>Selecione o filme</h2>
            <div className = "movies">
                {information.map((item,i)=> <Poster item = {item} key = {i}/>)}
            </div>
            
        </>
    )
}