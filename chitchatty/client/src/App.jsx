// Chatting
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";

//Styles
import "./App.css";

//Components
import MessageContainer from "./components/MessageContainer";
import ChannelListContainer from "./components/ChannelListContainer";
import Login from "./components/Login"
import Header from "./components/HeaderContainer";
import { useState } from "react";

//Sms notification
const apiKey = "j4877hzgyhwy";
const client = StreamChat.getInstance(apiKey);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"))
  if (isLoggedIn === false){
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
