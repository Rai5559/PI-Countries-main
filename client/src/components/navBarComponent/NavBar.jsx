
import { Link } from "react-router-dom";
import { NavBarContainer, NavLinks, SearchBarContainer } from "./navBarStyles";

export default function NavBar() {
    return (
      <NavBarContainer>
        <NavLinks>
          <Link to="/home">
            <h3>Home</h3>
          </Link>
          <Link to="/form">
            <h3>Form</h3>
          </Link>
        </NavLinks>
        <SearchBarContainer>
          <input type="text" placeholder="Search" />
        </SearchBarContainer>
      </NavBarContainer>
    );
  }