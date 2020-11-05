import React from 'react';
import styled from "@emotion/styled";
import units from "design-units";

const u = units;

const IconBubbleWrapper = styled.a`
  border: 1px black, solid;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  ${u({
    height: ["24px", "32px"],
    width: ["24px", "32px"],
    backgroundColor: "primary",
    padding: 2,
    marginLeft: [2, 3]
  })}
  img {
    height: 100%;
    width: 100%;
  }
  :hover {
    ${u({
      height: ["30px", "38px"],
      width: ["30px", "38px"],
    })}
  }
`;

export const IconBubble = ({icon, link, name}) => {
  return (
    <IconBubbleWrapper href={link} target="__blank">
      <img src={icon} alt={name} />
    </IconBubbleWrapper>
  )
}