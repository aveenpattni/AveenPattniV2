import React from "react";
import styled from "@emotion/styled";
import units from "design-units";

const ContactBlockWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #F0F0F0;
  border-radius: 25%;
  position: relative;
  ${units({
    width: ["150px", "250px", "250px"],
    height: ["150px", "250px", "250px"],
    margin: 2
  })}
`;
const ContactIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px black solid;
  border-radius: 50%;
  ${units({
    width: "100px",
    height: "100px",
    padding: 2
  })}
  img {
    ${units({
      width: "80px",
      height: "80px"
    })}
  }
  :hover {
    ${units({
      width: "110px",
      height: "110px"
    })}
  }
`;
const ContactName = styled.h4`
  margin: 0;
  ${units({
    fontSize: "h4"   
  })}
`;

export const ContactBlock = props => (
  <ContactBlockWrapper>
    <ContactIcon href={props.link} target="__blank">
      <img src={props.icon} alt={props.name} />
    </ContactIcon>
    <ContactName>
      {props.name}
    </ContactName>
  </ContactBlockWrapper>
);
