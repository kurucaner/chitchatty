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
import logoutIcon from "../../Assests/logout.png";

//Components
import ChannelSearch from "../ChannelSearch";
import TeamChannelList from "../TeamChannelList";
import TeamChannelPreview from "../TeamChannelPreview";
import UserList from "../UserListContainer";

const SideBar = ({ logout }) => (
  <Wrapper>
    <Content>
      <Icon>
        <ChatLogo src={chaticon} alt="chaticon" />
      </Icon>
    </Content>
    <Content2>
      <Icon>
        <LogoutLogo src={logoutIcon} alt="logout" onClick={logout} />
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
  const logout = () => {
    window.location.reload();
  };
  return (
    <>
      <SideBar logout={logout}/>
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <UserList />
        {/* <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="team" />
          )}
        /> */}
      </div>
    </>
  );
};

export default ChannelListContainer;
