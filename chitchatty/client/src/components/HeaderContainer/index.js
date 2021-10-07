import React from "react";

// Styling
import { Wrapper, Content, Image } from "./Header.styles";

function Header() {
    return (
        <Wrapper>
            <Content>
            <h1>ChitChatty | Insert Slogan Here</h1>
        {/* Placeholder logo below */}
            <Image src="https://i.imgur.com/4FH70EV.png" />

            </Content>
        </Wrapper>
    );
}

export default Header;