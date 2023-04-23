import { Link } from "react-router-dom";
import { CardStyle } from "./cardStyles";

export default function Card(props) {
  return (
    <Link to={`/detail/${props.id}`} style={{ textDecoration: "none" }}>
      <CardStyle>
        <img src={props.flags} alt="flag" />
        <h1>{props.name}</h1>
        <h2>{props.continent}</h2>
      </CardStyle>
    </Link>
  );
}
