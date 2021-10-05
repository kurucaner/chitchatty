import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url("https://i.imgur.com/xMKnv6J.jpg");
  min-height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem;
  width: 18vw;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 2rem;
  box-shadow: 0px 1px 5px rgb(0 0 0 / 10%);
  border-radius: 5px;
  transition: 0.8s ease;
  background: linear-gradient(#e66465, #9198e5);

  h2 {
      color: #FFFFFF;
  }

  em {
    color: #B9BBBE;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 1rem 0rem;

  label {
      padding-top: 10px;
    margin-bottom: 0.45rem;
    color: #B9BBBE;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0.7px;
    line-height: 1.3;
  }

  input {
    padding: 0.55rem 0.4rem;
    border: 1px solid rgb(184, 196, 194);
    border-radius: 4px;
    font-size: 14px;
    outline: none;
    transition: all 150ms ease-in-out 0s;
    width: 85%;
    background: #fff;
  }
`;
