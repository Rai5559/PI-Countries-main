import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url("https://i.pinimg.com/originals/5b/60/bc/5b60bc64b123e9a16cb931dcf77baa66.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    background-size: 100% 100%;
  }
`;

export const Title = styled.h1`
  color: black;
  text-align: center;
  font-family: "Urban Jungle", sans-serif;
  font-size: 8rem;
  margin-top: 0px;
  opacity: 0.85;
  letter-spacing: 10px;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  height: fit-content;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  background-color: #333;
  color: #fff;
  padding: 20px 40px;
  border: none;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2rem;
  opacity: 0.8;
  cursor: pointer;
  font-family: "Urban Jungle", sans-serif;
  transition: 0.3s;

  &:hover {
    background-color: #555;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 10px 20px;
  }
`;
