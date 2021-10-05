import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid #00000033;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  margin-bottom: 8px;
  width: 95%;
  :focus & {
    border: 1px solid #fff;
  }
`;

export const Icon = styled.div`
  width: 32px;
  display: flex;
  justify-content: center;
`;
