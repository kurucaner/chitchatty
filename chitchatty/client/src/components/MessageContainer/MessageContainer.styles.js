import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  border-radius: 5px;
  padding: 20px;
  width: 100%;
  overflow: auto;
`;
export const Content = styled.div`
  width: 100%;
  padding: 6px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #f2f2f2;
`;

export const Message = styled.div`
  animation: animateMovieInfo 1s;
  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
