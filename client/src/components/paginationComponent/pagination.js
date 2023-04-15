import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/6;
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
