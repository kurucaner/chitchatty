import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 20px;
  height: 75px;
  background: #353945;
  padding-bottom: 10px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding-left: 65px;
  margin: 0 auto;
  h1 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: italic;
    color: white;
    font-size: 20px;
  }
`;

export const Image = styled.img`
  width: 80px;
  align-items: center;
  padding-right: 200px;
  padding-top: 5px;
`;