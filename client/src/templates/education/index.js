import React from 'react';
import styled from "@emotion/styled";
import units from "design-units";
import { SchoolBlock } from "../../components/SchoolBlock";
import messages from "./messages";

const EducationWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  ${units({
    backgroundColor: "white"
  })}
`;
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  align-items: center;
  ${units({
    marginRight: [3, 4],
    marginLeft: [3, 4],
    marginBottom: "24px",
    flexDirection: "column"
  })}
`;
const EducationHeader = styled.h2`
  font-family: "Georgia";
  ${units({
    fontSize: "h2",
    marginTop: [3, 4]
  })}
`;
const GridSection = styled.div`
  display: flex;
  width: 100%;
  ${units({
    flexDirection: ["column", "column", "row"],
    justifyContent: ["flex-start", "flex-start", "space-evenly"]
  })}
`;
const BlockSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${units({
    width: ["100%", "100%", "50%"]
  })}
`;
const SubHeader = styled.h2`
  font-family: "Georgia";
  text-decoration: underline;
  ${units({
    fontSize: "h4",
    marginTop: [2, 3]
  })}
`;
const SpaceBlock = styled.div`
  ${units({
    width: [0, 0, "48px"],
    height: [0, 0, "100%"]
  })}
`;

export const EducationSection = () => {
  return (
    <EducationWrapper id="education">
      <ContentWrapper>
        <EducationHeader>Education</EducationHeader>
        <GridSection>
          <BlockSection>
            <SubHeader>School</SubHeader>
            {messages.degrees.map(item => <SchoolBlock key={item.name} {...item}/>)}
          </BlockSection>
          <SpaceBlock />
          <BlockSection>
            <SubHeader>Certifications</SubHeader>
            {messages.certs.map(item => <SchoolBlock key={item.name} {...item}/>)}
          </BlockSection>
        </GridSection>
      </ContentWrapper>
    </EducationWrapper>
  )
}