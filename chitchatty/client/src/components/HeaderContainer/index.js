import React from "react";

// Styling
import { Wrapper, Content, Image } from "./Header.styles";

function Header() {
    return (
        <Wrapper>
            <Content>
            <h1>ChatIron | The choice chat app for Flatiron Students</h1>
        {/* Placeholder logo below */}
            <Image src="https://i.imgur.com/HB10dN7.png" />

            </Content>
        </Wrapper>
    );
}

export default Header;