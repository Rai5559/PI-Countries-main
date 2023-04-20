
import styled from 'styled-components';

export const NavBarContainer = styled.div`
  margin: -10px 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 1rem;
  border: 1px solid #000;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px #000;
  padding: 0.5rem 1rem;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Urban Jungle';

  h3{
    font-size: 1.5rem;
    justify-content: space-between;
    margin-right: 2rem;
    margin-left: 2rem;
  }

  a {
    color: black;
    margin-right: 1rem;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SearchBarContainer = styled.div`
  input {
    padding: 0.5rem;
    border-radius: 0.25rem;
  box-shadow: 2px 2px 2px 2px #000;
    font-size: 1rem;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid black;
  box-shadow: 2px 2px 2px 2px #000;
  border-radius: 5px;

  select {
    padding: 5px;
    font-size: 16px;
  }

  label {
    margin-right: 10px;
    font-size: 16px;
  }
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;
