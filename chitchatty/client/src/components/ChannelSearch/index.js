import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";

//Icon
import { SearchIcon } from "../../Assests/SearchIcon";

//Styles
import {
  Wrapper,
  Content,
  Icon,
} from "./ChannelSearch.styles";

const ChannelSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const getChannels = async (text) => {
    try {
      //fetching channels
    } catch (error) {
      setQuery("");
    }
  };

  const onSearch = (event) => {
    event.preventDefault();
    setLoading(true);
    setQuery(event.target.value);
    getChannels(event.target.value);
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
