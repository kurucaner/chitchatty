import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
  animation: animateMovieInfo 1s;
  border-bottom: 2px #fff solid;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  margin: 0;

`;

export const FullName = styled.p`
  color: #bdbdbd;
  font-weight: bold;
  :hover {
    cursor: pointer;
  }
`;

export const Username = styled.p`
  color: #bdbdbd;
  font-style: italic;
`;
