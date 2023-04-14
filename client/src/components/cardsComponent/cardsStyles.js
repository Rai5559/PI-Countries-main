import styled from "styled-components";

export const CardsStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
  justify-content: space-between; 
  padding: 1rem;
  text-align: center; 
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  button {
    margin: 0 10px;
    padding: 5px 10px;
    border: none;
    background-color: #2c3e50;
    color: #fff;
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  span {
    margin: 0 10px;
    font-size: 16px;
    font-weight: bold;
    color: #2c3e50;
  }
`;
