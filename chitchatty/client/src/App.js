import logo from "./logo.svg";

//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Chatting
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

//Styles
import { GlobalStyle } from "./GlobalStyle";
import "./App.css";

//Components
import ChnannelContainer from "../src/components/ChannelContainer";
import ChannelListContainer from "../src/components/ChannelListContainer";

//Sms notification
const apiKey = "j4877hzgyhwy";
const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client}>
        <Header />
        <ChannelListContainer />
        <ChnannelContainer />
      </Chat>
    </div>
  );
}

export default App;
