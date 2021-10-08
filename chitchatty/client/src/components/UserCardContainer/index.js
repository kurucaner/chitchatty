import React from "react";

//Styles 
import {
    Wrapper,
    Content,
    FullName,
    Username
} from "./UserCardContainer.styles"

//Components

const UserCard = ({user}) => {
    const {first_name, last_name, user_name} = user
    
    return (
        <Wrapper>
            <Content>
                <FullName>{first_name} {last_name} </FullName>
                <Username>({user_name})</Username>
            </Content>
        </Wrapper>
    )
}

export default UserCard;