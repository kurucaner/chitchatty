import React, { useState } from "react";
import { Content } from "../ChannelListContainer/ChannelListContainer.styles";

//Styles
import { Wrapper } from "./MessageContainer.styles";

const MessageContainer = () => {
  const initialState = {
    messages: "",
  };
  // const [messages, setFormMessages] = useState([])
  const [formMessages, setFormMessages] = useState(initialState);

  const handleChange = (e) => {
    setFormMessages({ ...formMessages, [e.target.name]: e.target.value });
  };

  const handleSendMsg = async (e) => {
    e.preventDefault();
    console.log("form submitted");

    const createMessage = (textData) => {
      const { messages } = textData;

      const content = {
        messages,
      };

      const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(content),
      };
      fetch("http://localhost:9292/messages", configObj)
        .then((response) => response.json())
        .then((data) => {
          console.log("message sent");
          console.log(data);
          console.log("message posted");
          setFormMessages(initialState);
        });
    };
    createMessage(formMessages);
    // setIsSignedUp(!isSignedUp);
  };

  // const handleSendMsg = async (e) => {
  //   e.preventDefault();

  //   const createMessage = (text) => {
  //     const message = {text}

  //   const configObj = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(message),
  //   };

  //   fetch("http://localhost:9292/messages", configObj)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       console.log("message sent")
  //       console.log(data)
  //       console.log("message posted")
  //       setFormMessages("");
  //     });
  //     createMessage(messages);
  //   }},

  return (
    <Wrapper>
      <div>Messages Container</div>
      <Content>
        <form onSubmit={handleSendMsg}>
          <input
            name="messages"
            type="text"
            value={formMessages.messages}
            onChange={handleChange}
          />
          <button>Send</button>
        </form>
      </Content>
    </Wrapper>
  );
};

export default MessageContainer;
