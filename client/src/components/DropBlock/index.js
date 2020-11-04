import React, { useState } from 'react';
import styled from "@emotion/styled";
import units from "design-units";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css"

const DropBoxWrapper = styled.article`
  border: 1px solid #F0F0F0;
  ${units({
    width: "100%",
    background: "white",
    marginBottom: [3, 4]
  })}
`;

const BlockHeader = styled.h3`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  ${units({
    fontSize: "h3",
    paddingTop: [1, 2],
    paddingBottom: [1, 2],
    marginLeft: [3, 2],
    marginRight: [3, 2]
  })}
`
const BlockSubHeader = styled.h4`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  font-weight: 500;
  ${units({
    fontSize: "h4",
    paddingTop: [1, 2],
    paddingBottom: [1, 2],
    marginLeft: [3, 2],
    marginRight: [3, 2]
  })}
`
const BlockDescription = styled.ul`
  margin: 0;
  ${units({
    fontSize: "p"
  })}
`;
const BlockLine = styled.li`

`;
const ToggleSection = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  cursor: pointer;
  ${units({
    fontSize: "h6",
    color: "link"
  })}
  width: auto;
`;
const SlideDownStyled = styled(SlideDown)`
  transition-duration: 0.5s;
`;
const BlockTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BlockImage = styled.div`
  display: flex;
  width: 90px;
  height: 90px;
  align-self: center;
  img {
    width: 90px;
    height: 90px;
  }
`;
const BlockText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropBlock = ({company, titleDate, description, pic}) => {
  const [isOpen, toggleBlock] = useState(false)
  return (
    <DropBoxWrapper>
      <BlockTop>
        <BlockText>
          <BlockHeader>{company}</BlockHeader>
          <BlockSubHeader>{titleDate}</BlockSubHeader>
        </BlockText>
        <BlockImage>
          <img src={pic} alt={company}/>
        </BlockImage>
      </BlockTop>
      <SlideDownStyled className={'my-dropdown-slidedown'}>
        {isOpen? <BlockDescription>
          {description.map(line => <BlockLine key={line}>{line}</BlockLine>)}
        </BlockDescription> : null}
      </SlideDownStyled>
      <ToggleSection onClick={() => toggleBlock(!isOpen)}>{isOpen? "Read Less": "Read More"}</ToggleSection>
    </DropBoxWrapper>
  )
}