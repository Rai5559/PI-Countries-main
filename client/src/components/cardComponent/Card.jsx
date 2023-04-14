
import { Link } from "react-router-dom";
import { CardStyle } from "./cardStyles";

export default function Card(props) {
    return (
        <CardStyle >
            <img src={props.flags} alt="flag" />
            <Link to={`/detail/${props.id}`} >
            <h1>{props.name}</h1>
         </Link>
            <h2>{props.continent}</h2>
        </CardStyle>
    );
}
