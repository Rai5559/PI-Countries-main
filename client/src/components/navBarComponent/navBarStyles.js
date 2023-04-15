
import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 0.5rem 1rem;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #fff;
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
    border: none;
    font-size: 1rem;
  }
`;