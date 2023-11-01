import styled from "styled-components";

export const Layout = styled.div`
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  h1 {
    color: #333;
    font-size: 1.5em;
  }

  img {
    width: 250px;
  }
`;

export const Input = styled.input`
  border: 2px solid #333;
  border-radius: 8px;
  color: #333;
  font-size: 1em;
  margin-bottom: 15px;
  max-width: 300px;
  outline: none;
  padding: 15px;
  width: 100%;  
`;

export const LoginButton = styled.button`
  background-color: #00b5cc;
  border: 3px solid #b2df28;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  max-width: 300px;
  padding: 15px;
  width: 100%;

  &:disabled {
    background-color: #eee;
    border: 2px solid #969595;
    color: #aaa;
    cursor: auto;
  }
`;