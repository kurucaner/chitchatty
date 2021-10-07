import React from "react";

//Styles 
import {
    Wrapper,
    Content
} from "./UserCardContainer.styles"

//Components

const UserCard = ({user}) => {
    const {first_name, last_name, user_name} = user
    
    return (
        <Wrapper>
            <Content>
                <>
                    <h4>{first_name} {last_name} ({user_name})</h4>
                </>
            </Content>
        </Wrapper>
    )
}

export default UserCard;