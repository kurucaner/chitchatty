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
import ChannelContainer from "./components/ChannelContainer";
import ChannelListContainer from "./components/ChannelListContainer";
import ChannelSearch  from "./components/ChannelSearch";
import Login from "./components/Login"

//Sms notification
const apiKey = "j4877hzgyhwy";
const client = StreamChat.getInstance(apiKey);

//Login page
const loginToken = false;

function App() {

  if(!loginToken) return <Login />
  return (
    <div className="app__wrapper">
      <Chat client={client}>
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;