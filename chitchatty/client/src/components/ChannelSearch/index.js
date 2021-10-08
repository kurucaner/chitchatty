import React, { useState } from "react";

//Icon
import { SearchIcon } from "../../Assests/SearchIcon";

//Styles
import { Wrapper, Content, Icon } from "./ChannelSearch.styles";

const ChannelSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const getChannels = async (text) => {
    try {
      //fetching channels
    } catch (error) {
      setQuery("");
      loading(true);
    }
  };
  const getUsers = async (text) => {
    try {
      //fetching users
    } catch (error) {
      setQuery("");
    }
  };

  const onSearch = (event) => {
    event.preventDefault();
    setLoading(true);
    setQuery(event.target.value);
    getChannels(event.target.value);
    getUsers(event.target.value);
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
          onChange={onSearch}
        />
      </Content>
    </Wrapper>
  );
};

export default ChannelSearch;
