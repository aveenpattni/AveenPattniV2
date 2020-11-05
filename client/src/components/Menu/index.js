import React from "react";
import styled from "@emotion/styled";
import units from "design-units";
import "./animation.scss";

const MenuWrapper = styled.div`
  position: fixed;
  right: 8px;
  top: 60px;
  border: 2px solid black;
  border-radius: 8px;
  ${units({
    display: ["flex", "none", "none"],
    backgroundColor: "secondary"
  })}
  animation: slide 0.5s ;
  -webkit-animation: slide 0.5s;
  animationEnd: slideOut 0.5s;
`;
const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
`;
const MenuItem = styled.li`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${units({
    fontSize: "h3",
    width: "200px",
    height: "50px"
  })}
  cursor: pointer;
  :hover {
    ${units({
      fontSize: "h2"
    })}
  }
`;

export const MenuModal = ({scroll}) => {
  return (
    <MenuWrapper>
      <MenuList>
        <MenuItem onClick={() => scroll("about")}>About</MenuItem>
        <MenuItem onClick={() => scroll("experienceSection")}>Experience</MenuItem>
        <MenuItem onClick={() => scroll("education")}>Education</MenuItem>
        <MenuItem onClick={() => scroll("contact")}>Contact</MenuItem>
      </MenuList>
    </MenuWrapper>
  )
}