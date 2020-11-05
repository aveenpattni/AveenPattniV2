import React, { useState } from 'react';
import styled from "@emotion/styled";
import units from "design-units";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css"

const DropBoxWrapper = styled.article`
  ${units({
    width: "100%",
    backgroundColor: "white",
    marginBottom: [3, 4]
  })}
  :hover {
    ${units({
      backgroundColor: "secondary"
    })}
    cursor: pointer;
    transition: 0.4s;
  }
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
  padding-bottom: 8px;
  ${units({
    fontSize: "p"
  })}
`;
const BlockLine = styled.li`
  margin-bottom: 4px;
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
  padding: 4px;
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
    <DropBoxWrapper onClick={() => toggleBlock(!isOpen)}>
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
    </DropBoxWrapper>
  )
}