import { useHistory } from "react-router-dom";

export default function Top ({back}) {
    const history = useHistory();
    return(
        <div className="title">
            <div className = {back? "back" : "hide"}>
                <ion-icon onClick={() => history.goBack()} name="chevron-back-circle-outline"></ion-icon>
            </div>
            <h1>CINEFLEX</h1>
        </div>
    )
}