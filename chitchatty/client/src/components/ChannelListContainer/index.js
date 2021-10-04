import React from "react";

// Chatting
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

//Styles
import { Wrapper, Image, Content, Content2 } from "./ChannelListContainer.styles";
import chaticon from "../ChannelListContainer/chaticon.png";
import logout from "../ChannelListContainer/logout.png";

const ChannelListContainer = () => (
  <Wrapper>
    <Content>
      <Image src={chaticon} alt="chaticon" width="30" />
    </Content>
    <Content2>
      <Image src={logout} alt="logout" width="30" />
    </Content2>
  </Wrapper>
);

export default ChannelListContainer;
