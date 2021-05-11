import Poster from './Poster';

export default function Home () {
    const information = [
        {
            movie: "movie 1",
            id: 1,
            imageURL: "https://m.media-amazon.com/images/I/51ctaU9AgCL.jpg"
        },
        {
            movie: "movie 2",
            id: 2,
            imageURL: "https://m.media-amazon.com/images/I/51ctaU9AgCL.jpg"
        },
        {
            movie: "movie 3",
            id: 3,
            imageURL: "https://m.media-amazon.com/images/I/51ctaU9AgCL.jpg"
        },
        {
            movie: "movie 4",
            id: 4,
            imageURL: "https://m.media-amazon.com/images/I/51ctaU9AgCL.jpg"
        },
        {
            movie: "movie 5",
            id: 5,
            imageURL: "https://m.media-amazon.com/images/I/51ctaU9AgCL.jpg"
        },
        {
            movie: "movie 6",
            id: 6,
            imageURL: "https://m.media-amazon.com/images/I/51ctaU9AgCL.jpg"
        }
    ]
    return (
        <>
            <h2>Selecione o filme</h2>
            <div className = "movies">
                {information.map((item,i)=> <Poster item = {item} key = {i}/>)}
            </div>
            
        </>
    )
}