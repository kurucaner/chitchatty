import React from "react";
import { Content, Wrapper } from "../MessageCardContainer/MessageCardContainer.styles"

const MessageCard = ({messageContent}) =>{
    const {message, user} = messageContent
    return(
        <Wrapper>
            <Content>
                <h4>{user ? (user.user_name) : "Anonymous User"}</h4>
                <p>{message}</p>
            </Content>
        </Wrapper>
    )
}

export default MessageCard;