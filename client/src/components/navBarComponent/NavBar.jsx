
import { Link } from "react-router-dom";
import SearchBar from "../searchBarComponent/SearchBar";

export default function NavBar() {
    return (
        <div className="navBar">
        <Link to="/home">
            <h3>Home</h3>
        </Link>
        <Link to="/form">
            <h3>Form</h3>
        </Link>
        <SearchBar />
        </div>
    );
}
