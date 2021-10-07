import logo from "./logo.svg";

//Routing
import { Switch, Route } from "react-router-dom";

// Chatting
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

//Styles
import { GlobalStyle } from "./GlobalStyle";
import "./App.css";

//Components
import MessageContainer from "./components/MessageContainer";
import ChannelListContainer from "./components/ChannelListContainer";
import ChannelSearch  from "./components/ChannelSearch";
import Login from "./components/Login"
import Header from "./components/HeaderContainer";
import { useState } from "react";

//Sms notification
const apiKey = "j4877hzgyhwy";
const client = StreamChat.getInstance(apiKey);

// Login page


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  if (isLoggedIn == false){
    return (
    <>
    <Header />
    <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    </>)
  } 
  else {
    return (
      <>
        <Header />
        <div className="app__wrapper">
              <Chat client={client} >
                <ChannelListContainer />
                <MessageContainer />
              </Chat>
        </div>
      </>
    );
  }
};

export default App;
