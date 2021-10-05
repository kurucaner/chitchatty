import styled from "styled-components";

export const Wrapper = styled.div`
  width: 72px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #353945;
  box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 320px) {
    display: none;
  }
`;

export const Content = styled.div`
  width: 44px;
  height: 44px;
  margin: 14px;
  background: linear-gradient(
      150.64deg,
      rgba(0, 0, 0, 0.1) 12.73%,
      rgba(0, 0, 0, 0) 89.32%
    ),
    #ffffff;
  border-radius: 9999px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.33);
`;

export const Content2 = styled.div`
  width: 44px;
  height: 44px;
  margin: 14px;
  background: linear-gradient(
      150.64deg,
      rgba(0, 0, 0, 0.1) 12.73%,
      rgba(0, 0, 0, 0) 89.32%
    ),
    #ffffff;
  border-radius: 9999px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.33);
  cursor: pointer;
`;

export const Icon = styled.div`
  font-family: Helvetica Neue, sans-serif;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChatLogo = styled.img`
  width: 30px;
  @media screen and (max-width: 500px) {
    width: 20px;
  }
`;

export const LogoutLogo = styled.img`
  width: 30px;
  @media screen and (max-width: 500px) {
    width: 20px;
  }
`;

export const ChannelHeader = styled.div`
  padding-left: 16px;
  height: 62px;
`;

export const ChannelHeaderText = styled.p`
  font-family: Helvetica Neue, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
`;
