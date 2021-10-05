import React from "react";

import { Wrapper, Error, Loading, Wrapper2, Content, Title } from "./TeamChannelList.styles";

const TeamChannelList = ({ children, error = false, loading, type }) => {
  if (error) {
    return type === "team" ? (
      <Wrapper>
        <Error>Connection Error, please try again.</Error>
      </Wrapper>
    ) : null;
  }

  if (loading) {
    return (
      <Wrapper>
        <Loading>{type === "team" ? "Channels" : "Messages"}</Loading>
      </Wrapper>
    );
  }
  return (
      <Wrapper2>
          <Content>
              <Title>{type === "team" ? "Channels" : "Direct Messages"}</Title>
              {/* Button */}
          </Content>
      </Wrapper2>
  );
};

export default TeamChannelList;
