import styled from "styled-components";

export const BGContainer = styled.div`
background-image: url("https://i.pinimg.com/originals/5b/60/bc/5b60bc64b123e9a16cb931dcf77baa66.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 5px;
  background-color: rgba(0, 0, 0,0.5);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 1);
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 1rem;
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }
  button {
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    margin-left: 0.5rem;
    cursor: pointer;
    font-size: 1.2rem;
  }
  
`;

export const FormContainer = styled.form`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  label {
    font-weight: bold;
    margin-top: 20px;
    font-size: 1.5rem;
  }

  input,
  select {
    padding: 0.5rem;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
    width: 100%;
    margin-top: 0.5rem;
    text-align: center;
  }

  select {
    appearance: none;
    background-color: white;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 16 16'%3E%3Cpath fill='%23333' d='M10.005 11.505l3.496-4.004a1 1 0 0 0 0-1.308l-3.496-4.004a1 1 0 0 0-1.562 1.24L10.73 6H3a1 1 0 0 0 0 2h7.73l-1.287 1.465a1 1 0 0 0 1.562 1.24z'/%3E%3C/svg%3E");
    background-position: right 0.5rem top 50%, center;
    background-repeat: no-repeat, repeat;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 10rem;
    overflow-y: auto;
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 0.5rem;
    width: 100%;
    margin-bottom: 20px;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  button {
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    margin-left: 0.5rem;
    cursor: pointer;
    margin-top: 1rem;
  }
`;

export const CountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  label {
    font-weight: bold;
    margin-top: 20px;
  }
  ul {
    margin-top: 20px;
  }
`;

export const Selected = styled.span`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  padding: 0.5rem;
  background-color: black;

`;

export const ErrorSpan = styled.span`
  color: red;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;
