import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/6;
  button {
    margin: 0 10px;
    padding: 5px 10px;
    border: 1px solid #000;
    box-shadow: 2px 2px 2px 2px #000;
    background-color: #fff;
    color: black;
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    &.active {
      background-color: #000;
      color: #fff;
      box-shadow: 2px 2px 2px 2px gray;
    }
  }
  span {
    margin: 0 10px;
    font-size: 16px;
    font-weight: bold;
    color: #2c3e50;
  }
`;
