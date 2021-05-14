export default function Bottom ({ src, title, weekday, hour }){
    return(
        <div className="bottom-session-time">
        <img src={src} alt={title}></img>
        <div>
            <p>{title}</p>
            <p className={weekday === ""? "hide": ""}>{weekday} - {hour}</p>
        </div>
    </div>
    )
}