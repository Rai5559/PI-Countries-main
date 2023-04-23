import styled, { keyframes } from "styled-components";
import mapa from "../../utils/images/mapa.png";

export const Container = styled.div`
  background-image: url("https://i.pinimg.com/originals/5b/60/bc/5b60bc64b123e9a16cb931dcf77baa66.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 15px;
  margin: 1rem;
  height: fit-content;
  width: 50vw;
  margin: 80px auto;
  h1,
  h2 {
    color: #fff;
    font-size: 1.5rem;
    margin: 0.5rem 0;
    text-align: center;
  }

  h1 {
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  h2 {
    font-weight: 600;
    text-transform: capitalize;
  }

  img {
    width: 50%;
    height: 50%;
    margin: 0 auto;
  }
`;

const mover = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Map = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: url(${mapa});
  background-size: cover;
  animation: ${mover} 5s linear infinite;
  filter: grayscale();
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const LoadingText = styled.h1`
  position: absolute;
  bottom: 35%;
  margin: auto;
  font-family: "Urban Jungle", cursive;
  opacity: 70%;
  letter-spacing: 7px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const HomeButton = styled.button`
  background-color: #ccc;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  margin-left: 0.5rem;
  margin-top: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 1rem;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background-color: #1e1e1e;
  color: #fff;
  border: 2px solid #fff;
  transition: 0.5s;
  &:hover {
    background-color: #fff;
    color: #1e1e1e;
  }
`;

export const FloatingBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 1);
  padding: 20px;
  box-shadow: 0px 0px 40px rgba(255, 0, 0, 0.5);
  color: white;
  border-radius: 15px;
`;
