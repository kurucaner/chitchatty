import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 20px;
  height: 75px;
  background: linear-gradient(to right, #e66465, #9198e5); ;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding-left: 200px;
  margin: 0 auto;
  h1 {
    color: white;
  }
`;

export const Image = styled.img`
  width: 80px;
  align-items: center;
  padding-right: 200px;
`;
