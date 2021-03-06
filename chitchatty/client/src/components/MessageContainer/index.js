import React, { useState, useEffect } from "react";

//Styles
import { Wrapper, Content, Message } from "./MessageContainer.styles";

//Component
import MessageCard from "../MessageCardContainer";

const MessageContainer = () => {
  const user = parseInt(localStorage.getItem("user"));
  const initialState = {
    messages: "",
    user_id: user,
  };
  const [allMessages, setAllMessages] = useState([]);
  const [formMessages, setFormMessages] = useState(initialState);

  const handleChange = (e) => {
    setFormMessages({ ...formMessages, [e.target.name]: e.target.value });
  };
  const getMessageList = async () => {
    fetch("http://localhost:9292/messages")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setAllMessages(data);
      });
  };

  useEffect(() => {
    getMessageList();
  }, []);

  const messageArr = allMessages.map((message) => {
    return <MessageCard key={message.id} messageContent={message} />;
  });

  const handleSendMsg = async (e) => {
    e.preventDefault();
    console.log("form submitted");

    const createMessage = (textData) => {
      const { messages, user_id } = textData;

      const content = {
        messages,
        user_id,
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
          setAllMessages([...allMessages, data]);
          setFormMessages(initialState);
        });
    };
    createMessage(formMessages);
  };

  return (
    <Wrapper>
      <Content>
        <form onSubmit={handleSendMsg}>
  
          <input
            name="messages"
            type="text"
            placeholder="Type your message..."
            value={formMessages.messages}
            onChange={handleChange}
          />
          <button className="message__button">Send</button>
        </form>
      </Content>
      <div class="chat-messages">
        <div class="message-box-holder">
          <div class="message-box">{messageArr}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MessageContainer;
