import styled, { keyframes }from 'styled-components';
import mapa from '../../utils/images/mapa.png'

export const DivContainer = styled.div`
   background-color: #1e1e1e;
  padding: 1rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin: 1rem;
    height: fit-content;
    width: 50vw;
    margin:auto;
 

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
  margin:auto ;
  
`;

export const LoadingText = styled.h1`
  position: absolute;
  bottom:35%;
  margin: auto;
  font-family: 'Urban Jungle', cursive;
  opacity: 70%;
  letter-spacing: 7px;
`;
