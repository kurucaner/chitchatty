import React, { useState } from "react";

// Chatting
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

//Styles
import {
  Wrapper,
  Content,
  Content2,
  Icon,
  ChatLogo,
  LogoutLogo,
  ChannelHeader,
  ChannelHeaderText,
} from "./ChannelListContainer.styles";
import chaticon from "../../Assests/chaticon.png";
import logout from "../../Assests/logout.png";

//Components
import ChannelSearch from "../ChannelSearch";

const SideBar = () => (
  <Wrapper>
    <Content>
      <Icon>
        <ChatLogo src={chaticon} alt="chaticon" />
      </Icon>
    </Content>
    <Content2>
      <Icon>
        <LogoutLogo src={logout} alt="logout" />
      </Icon>
    </Content2>
  </Wrapper>
);

const CompanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">@CHITCHATTY</p>
  </div>
);

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
      </div>
    </>
  );
};

export default ChannelListContainer;
