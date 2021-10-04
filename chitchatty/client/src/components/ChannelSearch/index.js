import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";

//Icon
import { SearchIcon } from "../../Assests/SearchIcon";

//Styles
import {
  Wrapper,
  Content,
  Icon,
} from "../ChannelListContainer/ChannelListContainer.styles";

const ChannelSearch = () => {
  const [query, setQuery] = useState("");

  const onSearch = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };
  return (
    <Wrapper>
      <Content>
        <Icon>
          <SearchIcon />
        </Icon>
        <input
          className="channel-search__input__text"
          placeholder="Search"
          type="text"
          value={query}
          onchange={onSearch}
        />
      </Content>
    </Wrapper>
  );
};

export default ChannelSearch;
