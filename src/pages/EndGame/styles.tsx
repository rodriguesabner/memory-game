import styled from "styled-components";

export const Layout = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: url('../../assets/bg.jpg');
  background-size: cover;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 20px 20px 50px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 1.2em;
  width: 100%;
  max-width: 800px;
  padding: 20px;
  margin: 0 0 30px;
  border-radius: 5px;
  gap: 20px;
  text-align: center;

  footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    button {
      background-color: #00b5cc;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      font-size: 1em;
      cursor: pointer;
      transition: all 400ms ease;

      &:hover {
        filter: brightness(0.9);
      }

      &:last-child {
        background-color: #ff0000;
      }
    }
  }

  @media screen and (max-height: 800px) {
    font-size: 1em;
    padding: 15px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  .card {
    aspect-ratio: 4/4;
    width: 100%;
    border-radius: 5px;
    position: relative;
    transition: all 400ms ease;
    transform-style: preserve-3d;
    background-color: #ccc;
  }

  .face {
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
    background-position: center;
    border: 5px solid #00b5cc;
    border-radius: 5px;
    transition: all 400ms ease;
  }

  .front {
    transform: rotateY(180deg);
  }

  .back {
    background-image: url('../../assets/back.png');
    backface-visibility: hidden;
  }

  .reveal-card {
    transform: rotateY(180deg);
  }

  .disabled-card {
    filter: saturate(0);
    opacity: 0.5;
  }

  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(4, 1fr);

    .card {
      aspect-ratio: 3/4;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 800px;
  }

  @media screen and (max-height: 800px) {
    max-width: 650px;
  }
`;
